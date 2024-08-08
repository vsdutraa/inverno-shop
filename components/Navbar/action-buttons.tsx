// shadcn
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// react-icons
import { LuAlignJustify } from "react-icons/lu";
import { UserIcon } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import Link from "next/link";

export const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="" className="flex space-x-4">
                    <UserIcon />
                    <span>User</span>
                  </Link>
                  <Link href="" className="flex space-x-4">
                    <ShoppingCart />
                    <span>Cart</span>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="ghost">
          Sign in
        </Button>
        <Button className="text-md">Cart</Button>
      </div>
    </div>
  );
};
