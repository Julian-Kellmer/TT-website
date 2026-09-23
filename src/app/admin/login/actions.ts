"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionToken } from "@/lib/admin-auth";

export async function login(formData: FormData) {
  const password = formData.get("password");

  if (typeof password !== "string" || password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=1");
  }

  const token = await getSessionToken();
  const cookieStore = await cookies();

  cookieStore.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 días
  });

  redirect("/admin/productos");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}
