import React from "react";
import "./home.css";
import Link from "next/link";
import Image from "next/image";
import background from "../public/backgroundnoise.png";

export const Home = () => {
  return (
    <main className="relative flex flex-col items-center justify-between">
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="background noise"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="main">
          <div className="h1s">
            <h1 className="SC">
              SAME <span className="cur">CURRICULUM</span>
            </h1>
            <h1 className="NA">
              NEW <span className="approach">APPROACH</span>
            </h1>
          </div>
          <div className="para">
            <p>ASSESS YOURSELF TODAY ON OUR CUTTING</p>
            <p>EDGE ARTIFICIAL INTELLIGENCE BASED</p>
            <p>ADAPTIVE TESTS</p>
          </div>
          <Link href="/pages/dashboard">
            <button className="btn">GET STARTED</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
