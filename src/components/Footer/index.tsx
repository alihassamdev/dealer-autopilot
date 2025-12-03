import Image from "next/image";
import Link from "next/link";

import Text from "@/ui/Text";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/ui/icons";

import logo from "@/public/images/footer/white-logo.svg";

const Footer = () => {
  return (
    <footer className="w-full pt-[23px] pb-[35px] md:pt-[106px] md:pb-[43px]  bg-[#021827] ">
      <div className="w-full max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row  md:items-start md:justify-start gap-y-[94px] md:gap-x-[236px]">
          {/* Left: Logo + description */}
          <div className="w-full md:max-w-[397px] flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo */}
            <Link href="/">
              <div className="relative w-[183px] h-[129px]">
                <Image
                  src={logo}
                  fill
                  alt="Dealer AutoPilot Logo"
                  className="object-contain"
                />
              </div>
            </Link>
            <Text className="mt-10 text-off-white text-[12px] leading-4 md:text-[14px] md:leading-[22px] tracking-[0.3%]">
              Intelligent AI-driven monitoring that prevents issues, maximizes
              sales, and protects your customer satisfaction bonuses.
            </Text>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start gap-y-10 md:gap-x-[102px] text-center md:text-left">
            {/*company links */}
            <nav className="w-full md:max-w-[108px] flex flex-col items-center md:items-start ">
              <Text
                as="h4"
                className="text-lg font-medium text-white mb-[25px]"
              >
                Company
              </Text>
              <ul className="space-y-[25px] text-sm text-slate-300">
                <li>
                  <Link
                    href="/pain-points"
                    className="tracking-[0.2%] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] font-normal hover:text-secondary"
                  >
                    Pain Points
                  </Link>
                </li>
                <li>
                  <Link
                    href="/benefits"
                    className="tracking-[0.2%] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] font-normal hover:text-secondary"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/results"
                    className="tracking-[0.2%] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] font-normal hover:text-secondary"
                  >
                    Results
                  </Link>
                </li>
              </ul>
            </nav>

            {/*  legal links */}
            <nav className="w-full md:max-w-[136px] flex flex-col items-center md:items-start ">
              <Text
                as="h4"
                className="text-lg font-medium text-white mb-[25px]"
              >
                Legal Terms
              </Text>
              <ul className="space-y-[25px] text-sm text-slate-300">
                <li>
                  <Link
                    href="/"
                    className="tracking-[0.2%] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] font-normal hover:text-secondary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="tracking-[0.2%] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] font-normal hover:text-secondary"
                  >
                    Contracts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="tracking-[0.2%] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] font-normal hover:text-secondary"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Social Iocns */}
        <div className="mt-[60px] md:mt-0 flex items-center justify-center md:justify-end gap-[30px] md:gap-4">
          <Link href="/">
            <FacebookIcon />
          </Link>

          <Link href="/">
            <InstagramIcon />
          </Link>

          <Link href="/">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <hr className="md:my-10 my-5" />
      <Text className="text-white text-center px-5">
        Dealer AutoPilot is a product of Dealer Structure LLC
      </Text>
    </footer>
  );
};

export default Footer;
