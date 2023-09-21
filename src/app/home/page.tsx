import React from "react";
import "./home.css"
import Link from "next/link";
export const Home =()=>{
    return <div className="main">
       
            <div>
                <div className="h1s">

            <h1 className="SC">SAME <span className="cur">CURRICULUM</span></h1>
            <h1 className="NA">NEW <span className="approach">A P P R O A C H</span> </h1>
            </div>
           
            <div className="para">
            <p>ASSESS YOURSELF TODAY ON OUR CUTTING  </p>
            <p> EDGE ARTIFICIAL INTELLIGENCE BASED</p>
            <p>
               ADAPTIVE TESTS 
            </p>
            </div>
            
                <Link href= {'/pages/dashboard'}><button className="btn">GET  STARTED</button></Link>
            
            </div>
        
       

    </div>
}