"use client";
import logout from "@/lib/logout";
import { DeleteTokenFromCookie } from "@/utilities/CookieOperation";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    (async () => {
      let result = await logout();
      if (result.status) {
        await DeleteTokenFromCookie("lt");
        window.location.href = "/";
      }
    })();
  });
  return <div></div>;
};

export default page;
