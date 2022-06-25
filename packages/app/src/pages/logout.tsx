import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    if (window !== undefined) {
      window.localStorage.removeItem("selectedWallet");
      router.push("/");
    }
  });
  return null;
}
