import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="ghost">Bấm vào đây</Button>
      <Image 
        src={"../../public/images/logo.svg"}
        alt="Logo"
        width={300}
        height={300}
      />
    </div>
  );
}
