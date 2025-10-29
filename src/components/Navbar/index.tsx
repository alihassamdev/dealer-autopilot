"use client";

import Link from "next/link";
import Image from "next/image";

import Text from "@/ui/Text";
import logo from "@/public/images/navbar/logo.svg";
import { FillArrow } from "@/ui/icons";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Pain Points", href: "/" },
    { label: "Benefits", href: "/" },
    { label: "Results", href: "/" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className="px-5 pb-[90px] pt-[73px]">
        <div className="hidden items-center justify-between w-full max-w-[1240px] mx-auto lg:flex">
          {/* Logo */}
          <Link href="/">
            <div className="relative w-[151px] h-[107px]">
              <Image
                src={logo}
                fill
                alt="Dealer AutoPilot Logo"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-10 items-center ">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href}>
                <Text className="hover:text-secondary transition-colors duration-200 text-charcoal-grey font-bold">
                  {label}
                </Text>
              </Link>
            ))}
            {/* Button */}
            <button
              className="
                    flex items-center justify-center gap-3 cursor-pointer
                    h-11 w-[131px] py-2.5 px-[15px]
                    rounded-[12px]
                    bg-secondary hover:bg-primary
                    text-off-white text-[16px] font-medium leading-0
                    transition-opacity
                "
            >
              Contact
              <FillArrow />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
