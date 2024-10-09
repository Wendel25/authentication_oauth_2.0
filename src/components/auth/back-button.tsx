"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackButtonInterface } from "@/interfaces/back-button.interface";

export function BackButton({ href, label }: BackButtonInterface) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
