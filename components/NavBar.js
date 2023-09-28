"use client";
import Link from "next/link";
import nitdLogo from "@/public/nitd-logo.png";
import Image from "next/image";
export default function NavBar() {
  return (
    <>
      <Header />
      <NavRibbon />
    </>
  );
}
const NavRibbon = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Submissions", link: "/submissions" },
    { name: "Tracks", link: "/tracks" },
    { name: "Speakers", link: "/speakers" },
    { name: "Committees", link: "/committees" },
    { name: "Sponsors", link: "/sponsors" },
  ];

  return (
    <nav className="md:block bg-blue-700 text-white sticky top-0 z-50">
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
};

const Header = () => {
  return (
    <div className="container mx-auto px-6 py-2">
      <div className="flex space-x-6 items-center">
        <Image
          src={nitdLogo}
          className="max-h-16 object-contain"
          alt="NITD"
          width={72}
          quality={100}
        />
      <span class="text-3xl font-bold">ICECSP 2024</span>
      </div>
    </div>
  );
};
