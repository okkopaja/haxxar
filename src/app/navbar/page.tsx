import React from "react";
import Link from "next/link";
import "./navbar.css"
export function NavbarDefault() {
 
  return (
    <div>
  
      
      <nav >

      <Link href={'/'} className="title">Team Haxxar</Link>

        <ul>
      
          <li><Link href={'https://parakh.aicte-india.org/'}>Parakh</Link></li>

          <li><Link href={'/pages/dashboard'}>Dashboard</Link></li>

          <li><Link href={'https://parakh.aicte-india.org/specialization'}>Course</Link></li>
      
          <li><Link href={'https://parakh.aicte-india.org/guidelines'}>Guidelines</Link></li>

        </ul>

      </nav>

    </div>
  );
}