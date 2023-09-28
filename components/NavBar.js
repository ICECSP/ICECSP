'use client'
import Link from "next/link"
import { useState } from "react";


export default function NavBar() {
 

  return (
  <>
      <NavRibbon/>

  </>
  )
}
function NavRibbon({ open, toggleTracksMenu }) {
  const links = [
      {name: "Home", link: "/"},
      {name: "About", link: "/about"},
      {name: "Submissions", link: "/submissions"},
      {name: "Tracks", link: "/tracks"},
      {name: "Speakers", link: "/speakers"},
      {name: "Committees", link: "/committees"},
      {name: "Sponsors", link: "/sponsors"},
      
  ];

  return (
      <nav className= 'md:block bg-primaryDark text-white sticky top-0 z-50'>
          <div className="bg-primaryDark absolute md:static py-1.5 px-6 left-0 w-full md:w-auto mx-auto">
              <ul className=" md:flex md:items-center md:justify-between">
                  {links.map((link) => (
                      <li key={link.name} className="my-6 md:my-0">
                              <Link
                                  className="uppercase text-md font-medium hover:text-primary20"
                                  href={link.link}
                              >
                                  {link.name}
                              </Link>
                      </li>
                  ))}
              </ul>
          </div>
      </nav>
  );
}

  