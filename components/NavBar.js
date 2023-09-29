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
    { name: "Tracks", link: "/tracks" },
    { name: "Submissions", link: "/submissions" },
    // { name: "Speakers", link: "/speakers" },
    { name: "Committees", link: "/committee" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="md:block bg-primaryDark h-14 text-white sticky top-0 z-50">
      <div className="absolute md:static py-4 px-6 left-0 w-full md:w-auto mx-auto ">
        <ul className=" md:flex md:items-center md:justify-between">
          {links.map((link) => (
            <li key={link.name} className="my-6 md:my-0">
              <Link
                className="uppercase text-md font-bold hover:text-primary20"
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
    <div className="px-6 py-2 bg-primary05">
      <div className="flex space-x-6 items-center">
        <Image
          src={nitdLogo}
          className="max-h-16 object-contain"
          alt="NITD"
          width={72}
        />
      <span className="text-3xl font-bold text-primary80">ICECSP 2024</span>
      </div>
    </div>
  );
};
