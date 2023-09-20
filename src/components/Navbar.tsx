import React from "react";
import Link from "next/link";
export function NavbarDefault() {
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link href={''}
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >Pages</Link>

      <Link href={''}
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >Account</Link>

      <Link href={''}
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >Docs</Link>

      <Link href={''}
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >Blocks</Link>
      
      <Link href={''}
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >Curriculum</Link>
    </ul>
  );
 
  return (
    <nav className="py-2 px-4 lg:px-8 lg:py-4 shadow-md">
      <div className="w-screen mx-auto flex items-center justify-center">
        <div className="hidden lg:block ">{navList}</div>
      </div>
    </nav>
  );
}