"use server";
import { cookies } from "next/headers";

export async function SetTokenToCookie(token, cookieName) {
  await cookies().set(cookieName, token, { maxAge: 7200 });
}

export async function GetTokenFromCookie(cookieName) {
  const cookie = await cookies().get(cookieName);
  const value = cookie["value"];
  return value;
}

export async function DeleteTokenFromCookie(cookieName) {
  await cookies().delete(cookieName);
}
