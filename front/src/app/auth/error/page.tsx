import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function authError({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Image src="/images/error.svg" width={500} height={500} alt="error" />
      <p className="text-xl">{searchParams["message"] ?? ""}</p>
      <Link href="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
