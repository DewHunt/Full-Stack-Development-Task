import {
  CheckCookieAuth,
  CheckCookieAuthForLogin,
} from "./utilities/middleware/CheckCookieAuth";

export async function middleware(request, response) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(request);
  }

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/registration")
  ) {
    return await CheckCookieAuthForLogin(request);
  }
}
