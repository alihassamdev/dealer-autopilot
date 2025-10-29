"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Text from "@/ui/Text";
import logo from "@/public/images/navbar/logo.svg";
import { FillArrow, HamburgerMenu } from "@/ui/icons";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Pain Points", href: "/" },
    { label: "Benefits", href: "/" },
    { label: "Results", href: "/" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className="px-6 pb-[90px] pt-[73px] hidden md:block">
        <div className=" items-center justify-between w-full max-w-[1240px] mx-auto flex">
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

      {/* Mobile Navigation */}
      <header className="px-6 pb-[48px] pt-[54px] block md:hidden">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="relative w-[74px] h-[55px]">
              <Image
                src={logo}
                fill
                alt="Dealer AutoPilot Logo"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Drawer Trigger Button */}
          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
            <DrawerTrigger asChild>
              <button>
                <HamburgerMenu />
              </button>
            </DrawerTrigger>

            {/* Drawer Content */}
            <DrawerContent className=" h-full w-full max-w-none rounded-none border-none bg-white">
              <DrawerHeader className="flex flex-row items-center justify-between">
                <DrawerTitle className="text-xl font-semibold">
                  Menu
                </DrawerTitle>

                <DrawerClose asChild>
                  <button className="flex items-center justify-center rounded bg-gray-200 p-2 text-charcoal-grey hover:bg-gray-300 transition-colors">
                    <X size={20} strokeWidth={2} className="text-secondary" />
                  </button>
                </DrawerClose>
              </DrawerHeader>

              <nav className="flex flex-col gap-4 px-4 py-4 text-lg font-medium text-background">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-charcoal-grey hover:text-primary transition-colors"
                  >
                    <Text className="hover:text-secondary transition-colors duration-200 text-charcoal-grey font-bold">
                      {link.label}
                    </Text>
                  </Link>
                ))}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </>
  );
}
