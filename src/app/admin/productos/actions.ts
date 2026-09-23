"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugify } from "@/lib/slugify";

type AdminClient = ReturnType<typeof createAdminClient>;

async function uploadImagesForProduct(supabase: AdminClient, productId: string, files: File[]) {
  const realFiles = files.filter((file) => file instanceof File && file.size > 0);
  if (realFiles.length === 0) return;

  const { count } = await supabase
    .from("product_images")
    .select("*", { count: "exact", head: true })
    .eq("product_id", productId);

  let position = count ?? 0;

  for (const file of realFiles) {
    const ext = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
    const path = `${productId}/${crypto.randomUUID()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, buffer, { contentType: file.type || "image/jpeg" });

    if (uploadError) {
      console.error("Error subiendo imagen:", uploadError.message);
      continue;
    }

    await supabase.from("product_images").insert({
      product_id: productId,
      storage_path: path,
      position: position++,
    });
  }
}

function parseCommonFields(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim() || null;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock") ?? 0);
  const active = formData.get("active") === "on";
  const slugInput = String(formData.get("slug") ?? "").trim();
  const categoryIds = formData.getAll("categories").map(String);

  if (!name) throw new Error("El nombre es obligatorio");
  if (Number.isNaN(price) || price < 0) throw new Error("Precio inválido");

  const slug = slugify(slugInput || name);

  return { name, description, price, stock, active, slug, categoryIds };
}

function parseVariants(formData: FormData) {
  const names = formData.getAll("variant_name").map(String);
  const prices = formData.getAll("variant_price").map(String);

  return names
    .map((rawName, index) => ({
      name: rawName.trim(),
      price: Number(prices[index]),
    }))
    .filter((variant) => variant.name && !Number.isNaN(variant.price) && variant.price >= 0);
}

async function saveVariantsForProduct(
  supabase: AdminClient,
  productId: string,
  variants: { name: string; price: number }[]
) {
  await supabase.from("product_variants").delete().eq("product_id", productId);
  if (variants.length > 0) {
    await supabase.from("product_variants").insert(
      variants.map((variant, position) => ({
        product_id: productId,
        name: variant.name,
        price: variant.price,
        position,
      }))
    );
  }
}

export async function createProduct(formData: FormData) {
  const supabase = createAdminClient();
  const { name, description, price, stock, active, slug, categoryIds } =
    parseCommonFields(formData);

  const { data: product, error } = await supabase
    .from("products")
    .insert({ name, slug, description, price, stock, active })
    .select("id")
    .single();

  if (error || !product) {
    throw new Error(error?.message ?? "No se pudo crear el producto");
  }

  if (categoryIds.length > 0) {
    await supabase
      .from("product_categories")
      .insert(categoryIds.map((category_id) => ({ product_id: product.id, category_id })));
  }

  await saveVariantsForProduct(supabase, product.id, parseVariants(formData));
  await uploadImagesForProduct(supabase, product.id, formData.getAll("images") as File[]);

  revalidatePath("/admin/productos");
  redirect("/admin/productos");
}

export async function updateProduct(productId: string, formData: FormData) {
  const supabase = createAdminClient();
  const { name, description, price, stock, active, slug, categoryIds } =
    parseCommonFields(formData);

  const { error } = await supabase
    .from("products")
    .update({ name, slug, description, price, stock, active })
    .eq("id", productId);

  if (error) throw new Error(error.message);

  // Reemplaza el set de categorías asignadas por el que vino del formulario
  await supabase.from("product_categories").delete().eq("product_id", productId);
  if (categoryIds.length > 0) {
    await supabase
      .from("product_categories")
      .insert(categoryIds.map((category_id) => ({ product_id: productId, category_id })));
  }

  await saveVariantsForProduct(supabase, productId, parseVariants(formData));
  await uploadImagesForProduct(supabase, productId, formData.getAll("images") as File[]);

  revalidatePath("/admin/productos");
  redirect("/admin/productos");
}

export async function deleteProduct(productId: string) {
  const supabase = createAdminClient();

  const { data: images } = await supabase
    .from("product_images")
    .select("storage_path")
    .eq("product_id", productId);

  if (images && images.length > 0) {
    await supabase.storage.from("product-images").remove(images.map((img) => img.storage_path));
  }

  const { error } = await supabase.from("products").delete().eq("id", productId);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/productos");
}

export async function deleteProductImage(imageId: string, storagePath: string) {
  const supabase = createAdminClient();
  await supabase.storage.from("product-images").remove([storagePath]);
  await supabase.from("product_images").delete().eq("id", imageId);
  revalidatePath("/admin/productos");
}
