"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function MissingAuthConfigError() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const msg = searchParams.get("msg") || "Configuration error";

  useEffect(() => {
    toast.error(msg);
    router.replace("/"); // redirect home after toast
  }, [msg, router]);

  return null;
}