import Link from "next/link";
import nitdLogo from "@/public/nitd-logo.png";
import Image from "next/image";
export default function NavBar() {
  return (
    <>
      <header className="sm:h-[15vh] h-[10vh] flex flex-col">
        <Header />
      </header>
      <NavRibbon />
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
  // { name: "Speakers", link: "/speakers" },
  { name: "Registation Fees", link: "/registrationFees" },
  { name: "Committees", link: "/committee" },
  { name: "Contributors/Supporters", link: "/sponsors" },
  { name: "Contact", link: "/contact" },
];

const NavRibbon = () => {
  return (
    <nav className="bg-primary80 text-white sticky top-0 z-50">
      <div className="py-3 px-6 left-0 w-full md:w-auto mx-auto ">
        <ul className=" md:flex md:items-center md:justify-between">
          {links.map((link) => (
            <li key={link.name} className="my-6 md:my-0">
              <Link
                className="uppercase text-sm xl:text-md font-bold hover:text-primary10"
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

const Header = () => {
  return (
    <div className="px-6 py-2 bg-primary05 grow-[1] flex">
      <div className="flex gap-x-6 items-center">
        <Image
          src={nitdLogo}
          className="sm:max-h-16 max-h-10 object-contain sm:w-16 w-10 "
          alt="NITD"
        />
        <span className="sm:text-3xl text-2xl font-bold text-primaryDark">ICECSP 2024</span>
      </div>
      <div className="sm:hidden">
        
      </div>
    </div>
  );
};
