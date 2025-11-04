"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Text from "@/ui/Text";
import logo from "@/public/images/navbar/logo.svg";
import { HamburgerMenu } from "@/ui/icons";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import Button from "../ui/Button";

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
            <Button className="h-11 w-[131px] md:h-11 md:w-[131px]">
              Contact
            </Button>
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
            {/* Trigger Button */}
            <DrawerTrigger asChild>
              <button>
                <HamburgerMenu />
              </button>
            </DrawerTrigger>

            {/* Drawer Content */}
            <DrawerContent className="h-screen w-full max-w-none rounded-none border-none bg-white flex flex-col">
              {/* Header */}
              <DrawerHeader className="flex flex-row items-center justify-between p-4 shrink-0 pt-[54px] pb-[48px]">
                <DrawerTitle className="text-xl font-semibold text-charcoal-grey">
                  <Image
                    src={logo}
                    alt="Dealer AutoPilot Logo"
                    width={74}
                    height={55}
                  />
                </DrawerTitle>

                <DrawerClose asChild>
                  <button className="flex items-center justify-center rounded bg-gray-200 p-2 text-charcoal-grey hover:bg-gray-300 transition-colors">
                    <X size={20} strokeWidth={2} className="text-secondary" />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              {/* Navigation — perfectly centered */}
              <nav className="h-[80vh] flex flex-col items-center justify-center px-6">
                <ul className="w-full max-w-md space-y-4">
                  {navLinks.map((link, index) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center text-charcoal-grey hover:text-primary font-semibold text-lg transition-colors"
                      >
                        <Text className="hover:text-secondary transition-colors duration-200 font-bold text-lg">
                          {link.label}
                        </Text>
                      </Link>

                      {/* Separator line (don’t show after last item) */}
                      {index < navLinks.length - 1 && (
                        <div className="w-full h-px bg-gray-300 mt-4"></div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </>
  );
}
