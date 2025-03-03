import { Button } from "@heroui/react";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const navMenu = [
  { text: "Beranda", path: "#" },
  { text: "Tentang Kami", path: "#about-us" },
  { text: "Layanan & Produk", path: "#products" },
  { text: "Kontak Kami", path: "#contacts" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyHeader(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1025) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all ${
        stickyHeader ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between gap-4 px-6">
        <a
          href="#"
          className={`text-2xl font-bold ${stickyHeader ? "text-black" : "text-white"}`}
        >
          Pharma
          <span className={stickyHeader ? "text-blue" : "text-white"}>.</span>
        </a>

        {/* === desktop view === */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-10">
          {navMenu.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`font-medium hover:underline ${
                stickyHeader ? "text-black hover:text-blue" : "text-white"
              }`}
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* === mobile view === */}
        <div
          className={`absolute top-0 z-20 flex h-screen w-[70%] flex-col justify-center gap-4 bg-white px-4 shadow-lg transition-all lg:hidden ${
            isMenuOpen ? "left-0" : "-left-full"
          }`}
        >
          {navMenu.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="w-max text-[28px] font-bold text-black hover:italic hover:text-blue hover:underline"
            >
              {item.text}
            </a>
          ))}

          <div className="absolute left-0 top-4 flex w-full items-center justify-between gap-2 px-4">
            <a href="#" className="text-2xl font-bold text-black">
              Pharma<span className="text-blue">.</span>
            </a>

            <Button isIconOnly variant="light" onPress={toggleMenu}>
              <X weight="bold" size={18} />
            </Button>
          </div>
        </div>

        <Button
          isIconOnly
          variant="light"
          onPress={toggleMenu}
          className={`lg:hidden ${stickyHeader ? "text-black" : "text-white"}`}
        >
          <List weight="bold" size={24} />
        </Button>
      </div>

      {/* === overlay === */}
      <div
        className={`absolute left-0 top-0 z-10 h-screen w-full bg-black/30 backdrop-blur-[2px] transition-all ${
          isMenuOpen ? "flex" : "hidden"
        }`}
        onClick={toggleMenu}
      />
    </nav>
  );
}
