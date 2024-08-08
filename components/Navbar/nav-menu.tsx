"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

// components
import { Logo } from "./logo";

// shadcn
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const sections = {
  Men: [
    {
      title: "Suits",
      description: "Sharp, tailored suits.",
    },
    {
      title: "Jackets & Coats",
      description: "Outerwear for all seasons.",
    },
    {
      title: "Shirts",
      description: "For both formal and casual settings.",
    },
    {
      title: "Jeans & Trousers",
      description: "Everyday essentials with modern fits.",
    },
    {
      title: "Sweaters & Knitwear",
      description: "Layering pieces for cooler weather.",
    },
  ],
  Women: [
    {
      title: "Dresses",
      description: "Versatile styles for any occasion.",
    },
    {
      title: "Jackets & Coats",
      description: "Outerwear for every season.",
    },
    {
      title: "Shirts & Tops",
      description: "Stylish options for various events.",
    },
    {
      title: "Jeans & Trousers",
      description: "Modern fits for daily wear.",
    },
    {
      title: "Skirts",
      description: "Complete your outfit with style.",
    },
    {
      title: "Sweaters & Knitwear",
      description: "Warm layers for cooler days.",
    },
  ],
};

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid md:grid-cols-2 w-[300px] md:w-[450px] gap-3 p-4">
              {sections.Women.map((item) => (
                <ListItem key={item.title} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Men</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid md:grid-cols-2 w-[300px] md:w-[450px] gap-3 p-4">
              {sections.Men.map((item) => (
                <ListItem key={item.title} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
