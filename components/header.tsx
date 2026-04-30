"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { Twirl as Hamburger } from "hamburger-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Prestations" },
    { href: "#pourquoi", label: "Pourquoi nous" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetSection = document.querySelector(`#${targetId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-background/95 border-border z-50 flex md:h-30 h-22.5 items-center border-b backdrop-blur-sm">
        <div className="container mx-auto px-4 md:py-4 py-2">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              {/* <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <Flame className="text-primary-foreground h-6 w-6" />
              </div> 
              <span className="text-foreground text-xl font-semibold">
                Nico Chauffage
              </span> */}
              <Image src={"/logo_white.png"} alt="Logo" width={1000} height={1000} className="h-28 max-md:h-14 w-fit"  />
              
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild>
                <a href="tel:+41786414978">Appeler</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Hamburger
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                onToggle={(toggled: boolean) => {
                  if (toggled) {
                    document.body.classList.add("overflow-hidden");
                  } else {
                    document.body.classList.remove("overflow-hidden");
                  }
                }}
                size={26}
              />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`${isMenuOpen ? "left-0" : "-left-full"} bg-background absolute z-100 flex h-[calc(100%-90px)] w-full transition-all duration-500 ease-in-out md:hidden`}
      >
        <div className="flex flex-col gap-4 pt-8 pb-2 pl-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground py-2 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full">
            <a href="tel:+41786414978">Appeler</a>
          </Button>
        </div>
      </div>
    </>
  );
}
