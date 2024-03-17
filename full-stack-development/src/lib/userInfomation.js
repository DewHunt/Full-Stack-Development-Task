import { GetTokenFromCookie } from "@/utilities/CookieOperation";

export default async function getUserInfo() {
  const token = await GetTokenFromCookie("lt");
  const response = await fetch(`${process.env.API}me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error fetching newest posts");
  }
  return response.json();
}
