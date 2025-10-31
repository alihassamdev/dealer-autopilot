import Image from "next/image";

import { CrossIcon, FillArrow, FillCheck } from "@/components/ui/icons";
import Text from "@/components/ui/Text";

import dotsGrid from "@/public/images/transformation/dots-grid.svg";

import ContactUS from "../ContactUs";
import Button from "@/components/ui/Button";
import BadgeButton from "@/components/ui/BadgeButton";

const Transformation = () => {
  const leftData = {
    title: "Without Dealer AutoPilot",
    subtitle: "Traditional manual operation",
    items: [
      "Leads are lost without you knowing",
      "Surprising negative reviews",
      "Frequent and unexpected chargebacks",
      "Constantly lost CSI bonuses",
      "Manual and inconsistent follow-up",
      "Problems detected too late",
    ],
  };

  const rightData = {
    title: "With Dealer AutoPilot",
    subtitle: "Automated & proactive",
    items: [
      "Instant alerts on every lead",
      "Problems detected before escalation",
      "Chargebacks reduced to 5%",
      "CSI bonuses protected and maximized",
      "Automated follow-up 24/7",
      "Proactive problem prevention",
    ],
  };

  return (
    <section className="relative w-full pt-[46px] pb-[89px] md:pt-[110px] md:pb-[84px] bg-darkgradient">
      {/* bg dots grid */}
      <div className="absolute h-[204px] inset-x-0 top-[0]  z-0 ">
        <Image
          src={dotsGrid}
          alt="dots_vector"
          fill
          className="w-full h-[204px] object-cover"
        />
      </div>
      {/* Transformation */}
      <div className="px-6 ">
        <div className="w-full max-w-[1240px] mx-auto relative z-20 flex flex-col items-center">
          <BadgeButton className="mb-[25px] md:mb-[32px] bg-[#042A45] hover:bg-[#042A45] w-[224px] h-[56px]  md:w-[245px] md:h-[62px]">
            The Transformation
          </BadgeButton>

          {/* heading */}
          <Text
            as="h3"
            className="text-white/70 text-center mb-[50px] md:mb-[40px]"
          >
            See how your dealership can evolve with AI
          </Text>

          <div className="flex flex-wrap justify-center gap-[50px] md:gap-[25px] mb-[50px] w-full">
            {/* Left Card */}
            <div className="w-full md:basis-[503px] md:max-w-[503px] rounded-[12px] bg-[#441F06] px-[30px] py-[30px] md:py-[33px] shadow-md">
              <div className="mb-[30px] flex flex-col items-center lg:flex-row lg:items-center gap-y-[15px] lg:gap-[15px]">
                <div className="w-10 h-10 rounded-[10px] bg-secondary flex items-center justify-center shrink-0">
                  <CrossIcon />
                </div>
                <div>
                  <Text
                    as="h4"
                    className="text-white text-lg text-center lg:text-left"
                  >
                    Without Dealer AutoPilot
                  </Text>
                  <Text className=" text-off-white text-center lg:text-left">
                    Traditional manual operation
                  </Text>
                </div>
              </div>

              <ul className="flex flex-col gap-[30px]">
                {leftData.items.map((text, i) => (
                  <li key={i} className="w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-[15px] rounded-[8px] px-[35px] py-[7px] lg:p-[10px] bg-secondary min-h-[47px] shad text-white/80">
                      <CrossIcon />
                      <Text className="text-white/80 text-center">{text}</Text>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card */}
            <div className="w-full md:basis-[503px] md:max-w-[503px]  rounded-[12px] bg-[#042841] px-[30px] py-[30px] md:py-[33px] shadow-md">
              <div className="mb-[30px] flex flex-col items-center lg:flex-row lg:items-center gap-y-[15px] lg:gap-[15px]">
                <div className="w-10 h-10 rounded-[10px] bg-primary flex items-center justify-center shrink-0">
                  <FillCheck />
                </div>
                <div>
                  <Text
                    as="h4"
                    className="text-white text-lg text-center lg:text-left"
                  >
                    Without Dealer AutoPilot
                  </Text>
                  <Text className=" text-off-white text-center lg:text-left">
                    Traditional manual operation
                  </Text>
                </div>
              </div>

              <ul className="flex flex-col gap-[30px]">
                {rightData.items.map((text, i) => (
                  <li key={i} className="w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-[15px] rounded-[8px] px-[35px] py-[7px] lg:p-[10px] bg-primary min-h-[47px] text-white/80">
                      <FillCheck />
                      <Text className="text-white/80 text-center">{text}</Text>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* subheading */}
        <Text
          as="h4"
          className="text-off-white text-center mb-[36px] md:mb-[34px] font-bold"
        >
          The difference is clear. The decision is easy.
        </Text>

        {/* Button */}
        <Button className="mx-auto">See It in Action</Button>
      </div>

      {/* Contact US */}
      <ContactUS />
    </section>
  );
};

export default Transformation;
