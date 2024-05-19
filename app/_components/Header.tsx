import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Search from "./search";

const Header = () => {
  return (
    <div className="flex justify-between px-4 pt-6">
      <Image src="/Logo.png" alt="Logo" height={30} width={100} />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
