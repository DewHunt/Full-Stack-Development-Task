import { NextResponse } from "next/server";

export async function CheckCookieAuth(req) {
  try {
    const token = req.cookies.get("lt");
    if (token) {
      const requestHeader = new Headers(req.headers);
      requestHeader.set("Authorization", `Bearer ${token["value"]}`);
      return NextResponse.next({ request: { headers: requestHeader } });
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export async function CheckCookieAuthForLogin(req) {
  try {
    const token = req.cookies.get("lt");
    if (token) {
      console.log("token: ", token["value"]);
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
