import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

{/* A NavBar. */}  
const NavBar = () => {
  return (
    <Navbar position="static" className='mt-[1.5rem]'>
      <NavbarBrand>
        <p className="ml-3 sm:absolute sm:-translate-x-[16rem] font-bold text-inherit text-2xl">
          WH40K Astartes Database
        </p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 translate-x-[8rem]"
        justify="right"
      >
        <NavbarItem >
          <Link color="foreground" href="#footer">
            Disclaimer
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;