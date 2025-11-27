"use client";
import links from "@/data-sources/nav-links";
import NavDrawer from "./nav-drawer";
import { useState } from "react";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  function toggleDrawer(){
    setDrawer(!drawer)
  }
 
  return (
    <nav className="py-2 px-10 md:px-40 shadow-md flex items-center justify-between">
      <p className="text-xl text-blue-500 font-bold">Logo</p>
      <div className="text-blue-400 space-x-4 hidden md:block">
        {links.map((link, index) => {
          return (
            <a
              className="hover:text-blue-500 hover:underline"
              href={link.path}
              key={index}
            >
              {link.name}
            </a>
          );
        })}
      </div>
      <button onClick={toggleDrawer} className="text-blue-500 text-2xl md:hidden">{drawer ? "x" : "="}</button>
      {drawer && <NavDrawer />}
      {/* {drawer? <NavDrawer /> : null} */}
    </nav>
  );
}
