"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

type Props = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ title, variant, className, ...props }: Props) {
  const router = useRouter();
  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => router.back()}
      title={title}
      //es hajord toxt propsi chat gbtn a avelacrel, vortev mi qqqani tox verev ...propsy error er talis vor iran cheinq ogtagorcel, dra haamr inqt taky ogtagorcrc gbt-n
      {...props}
    >
      {title}
    </Button>
  );
}
