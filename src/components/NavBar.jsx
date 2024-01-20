import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

{/* A NavBar. */}  
const NavBar = () => {
  return (
    <Navbar isBordered position="static" className="mt-[1.5rem]">
      <NavbarBrand>
        <button>
          <Link href="/">
            <p className="ml-3 sm:absolute font-bold text-inherit text-2xl hover:text-white/35 transition ease-in-out duration-100">
              WH40K Database
            </p>
          </Link>
        </button>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-[1.5rem] mt-[1.25rem] "
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
        <NavbarItem>
          <Link
            color="foreground"
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

        <NavbarItem>
          <Link
            color="foreground"
            href="/disclaimer"
            className="font-bold text-red-500 hover:text-red-950 transition ease-in-out duration-100"
          >
            DISCLAIMER
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;