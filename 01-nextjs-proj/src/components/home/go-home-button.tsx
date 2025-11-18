"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  redirect: string;
}
const GoHomeButton: FC<Props> = ({ redirect }) => {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.push(redirect)}>
      Go Home
    </Button>
  );
};
export { GoHomeButton };
