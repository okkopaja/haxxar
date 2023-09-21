import React from "react";
import Link from "next/link";
import "./Navbar.css"
export function NavbarDefault() {
 
  return (
    <div>
  
      
      <nav >

      <Link href={''} className="title">Team Haxxar</Link>

        <ul>
      
          <li><Link href={''}>Home</Link></li>

          <li><Link href={''}>Dashboard</Link></li>

          <li><Link href={''}>Course</Link></li>
      
          <li><Link href={''}>Guidelines</Link></li>

        </ul>

      </nav>

    </div>
  );
}