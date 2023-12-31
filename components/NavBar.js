"use client";
import { useState } from "react";
import Link from "next/link";

import nitdLogo from "@/public/images/nitd-logo.png";
import ieeeLogo from "@/public/images/ieee.png";
import Image from "next/image";
export default function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="h-[15vh] flex flex-col">
        <Header menu={menu} setMenu={setMenu} />
      </header>
      <div className={`${menu ? "" : "hidden"} lg:block`}>
        <NavRibbon setMenu={() => setMenu(!menu)} />
      </div>
    </>
  );
}

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Call for Papers", link: "/callForPapers" },
  { name: "Tracks", link: "/tracks" },
  { name: "Important Dates", link: "/importantDates" },
  { name: "Paper Submissions", link: "/submissions" },
  { name: "Registration Fees", link: "/registrationFees" },
  { name: "Committees", link: "/committee" },
  // { name: "Contributors/Supporters", link: "/commingSoon" },
  { name: "Contributors", link: "/commingSoon" },
  { name: "Contact", link: "/contact" },
];

const NavRibbon = ({ setMenu }) => {
  return (
    <nav className="bg-primary90 text-white sticky top-0 z-50">
      <div className="py-2 sm:py-3 px-6 left-0 w-full md:w-auto mx-auto ">
        <ul className=" md:flex md:items-center md:justify-between">
          {links.map((link) => (
            <li key={link.name} className="my-5 sm:my-0">
              <Link
                onClick={setMenu}
                className="uppercase text-sm xl:text-md font-semibold tracking-wide hover:underline text-primary05 hover:text-white transition-colors"
                href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Header = ({ menu, setMenu }) => {
  return (
    <div className="h-[15vh] px-4 bg-primary05 grow-[1] flex items-center justify-between">
      <div className="flex gap-x-6 items-center">
        <Image
          src={nitdLogo}
          className="h-16 object-contain w-16"
          alt="NITD"
        />
        <span className="hidden sm:block sm:text-3xl text-2xl font-bold text-primaryDark">ICECSP <span className="text-primary80">2024</span></span>
      </div>
      <div className="flex justify-center items-center">

        <div className="mr-4">
          <IEEE />
        </div>
        <div className="md:hidden h-8 w-8 fill-slate-700" onClick={() => setMenu(!menu)}>
          {menu ?
            <svg className="transform rotate-45" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" /></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
          }
        </div>
      </div>
    </div>
  );
};

const IEEE = () => {
  return <>
    <div className="flex flex-col justify-center justify-self-end">
      <Image
        src={ieeeLogo}
        className="object-cover mx-auto h-14 sm:h-20 w-fit"
        alt="IEEE"
      />
      <div className="uppercase tracking-normal sm:tracking-widest text-xs sm:text-md sm:-mt-2 -mt-1 text-center font-bold text-primary90">Technical Sponsor</div>
    </div>
  </>
}
