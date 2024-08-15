import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Image src="/images/404.svg" width={500} height={500} alt="" />
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
