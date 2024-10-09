"use client";

import { useRouter } from "next/navigation";
import { LoginButtonProps } from "@/interfaces/login.button.interface";

export function LoginButton({ children, mode = "redirect" }: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
