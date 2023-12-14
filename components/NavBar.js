"use client";
import { useState } from "react";
import Link from "next/link";

import nitdLogo from "@/public/images/nitd-logo.png";
import ieeeLogo from "@/public/images/ieee/ieee.jpeg";
import IEEEPhotonic from "@/public/images/ieee/1.jpeg"
import IEEECircuits from "@/public/images/ieee/2.jpg"
import IEEEElectron from "@/public/images/ieee/3.jpg"

import Image from "next/image";
export default function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="sm:h-[15vh] h-[10vh] flex flex-col">
        <Header menu={menu} setMenu={setMenu} />
      </header>
      <div className={`${menu ? "" : "hidden"} md:block`}>
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
  { name: "Submissions", link: "/submissions" },
  { name: "Registration Fees", link: "/registrationFees" },
  { name: "Committees", link: "/committee" },
  { name: "Contributors/Supporters", link: "/commingSoon" },
  { name: "Contact", link: "/contact" },
];

const NavRibbon = ({ setMenu }) => {
  return (
    <nav className="bg-primary90 sm:bg-primary80 text-white sticky top-0 z-50">
      <div className="py-2 sm:py-3 px-6 left-0 w-full md:w-auto mx-auto ">
        <ul className=" md:flex md:items-center md:justify-between">
          {links.map((link) => (
            <li key={link.name} className="my-5 sm:my-0">
              <Link
                onClick={setMenu}
                className="uppercase text-sm xl:text-md font-semibold sm:font-bold hover:text-primary10"
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
    <div className="px-6 py-2 bg-primary05 grow-[1] flex items-center justify-between">
      <div className="flex gap-x-6 items-center">
        <Image
          src={nitdLogo}
          className="sm:max-h-16 max-h-10 object-contain sm:w-16 w-10 "
          alt="NITD"
        />
        <span className="hidden sm:block sm:text-3xl text-2xl font-bold text-primaryDark">ICECSP 2024</span>
      </div>
      <div className="flex gap-x-4 items-center">

        <div className="ml-auto">
          <Image
            src={IEEEPhotonic}
            title="IEEEPhotonic Society Delhi Section Chapter, Rajasthan"
            className="object-contain w-28 mx-auto sm:w-44 "
            alt="IEEE"
          />
          {/* <div className="hidden sm:block text-xs text-center font-semibold text-gray-500">Technical Co-Sponsor</div> */}
        </div>
        <div className="">
          <Image
            src={IEEECircuits}
            title="IEEE Circuits and Systems Society Delhi Chapter"
            className="object-contain w-28 mx-auto sm:w-20 "
            alt="IEEE"
          />
          {/* <div className="hidden sm:block text-xs text-center font-semibold text-gray-500">Technical Co-Sponsor</div> */}
        </div>
        <div className="">
          <Image
            src={IEEEElectron}
            title="IEEE Electron Device Society Delhi Chapter"
            className="object-contain w-28 mx-auto sm:w-44 "
            alt="IEEE"
          />
          {/* <div className="hidden sm:block text-xs text-center font-semibold text-gray-500">Technical Co-Sponsor</div> */}
        </div>
        <div className="">
          <Image
            src={ieeeLogo}
            className="object-contain w-28 mx-auto sm:w-48 "
            alt="IEEE"
          />
          <div className="hidden sm:block text-xs text-center font-semibold text-gray-500">Technical Co-Sponsor</div>
        </div>
      </div>
      <div className="md:hidden h-8 w-8 fill-slate-700" onClick={() => setMenu(!menu)}>
        {menu ?
          <svg className="transform rotate-45" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" /></svg> :
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
        }
      </div>
    </div>
  );
};
