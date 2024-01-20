"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Astartes",
    "Chapters",
    "Inquisition",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <button>
            <Link href="/">
              <p className="ml-3 sm:absolute font-bold text-inherit text-2xl hover:text-white/35 transition ease-in-out duration-100">
                WH40K Database
              </p>
            </Link>
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-[1.5rem] mt-[1.25rem]"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="font-bold hover:text-white/35 transition ease-in-out duration-100"
          >
            Astartes
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/chapters"
            className="font-bold hover:text-white/35 transition ease-in-out duration-100"
          >
            Chapters
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/inquisition"
            className="font-bold hover:text-white/35 transition ease-in-out duration-100"
          >
            Inquisition
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="/"
            className="font-bold hover:text-white/35 transition ease-in-out duration-100"
          >
            Astartes
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="/chapters"
            className="font-bold hover:text-white/35 transition ease-in-out duration-100"
          >
            Chapters
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="/inquisition"
            className="font-bold hover:text-white/35 transition ease-in-out duration-100"
          >
            Inquisition
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="/inquisition"
            className="font-bold text-red-500 hover:text-white/35 transition ease-in-out duration-100"
          >
            DISCLAIMER
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Hamburger;