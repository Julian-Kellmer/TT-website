"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugify } from "@/lib/slugify";

export async function createCategory(formData: FormData) {
  const supabase = createAdminClient();
  const name = String(formData.get("name") ?? "").trim();
  if (!name) throw new Error("El nombre es obligatorio");

  const { error } = await supabase.from("categories").insert({ name, slug: slugify(name) });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/categorias");
}

export async function deleteCategory(categoryId: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("categories").delete().eq("id", categoryId);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/categorias");
}
