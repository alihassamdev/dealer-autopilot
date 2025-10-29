import Image from "next/image";

import Text from "@/components/ui/Text";
import { Rocket } from "@/components/ui/icons";

import videoPlaceholder from "@/public/images/pain-points/video-placeholder.png";

import { RealityOfLeadership } from "./RealityOfDealership";

const PainPoints = () => {
  return (
    <section className="w-full pt-14 pb-12 md:pt-[68px] md:pb-[72px] bg-darkgradient">
      <div className="px-6 ">
        <div className="w-full max-w-[1240px] mx-auto relative z-20">
          {/* Video */}
          <div className="overflow-hidden aspect-16/6 w-full">
            <Image
              src={videoPlaceholder}
              alt="vidoe"
              layout="fill"
              objectFit="cover"
              className="transform"
              priority
            />
          </div>
          {/*  badge on bottom Video */}
          <div className="absolute right-7 bottom-[-57px] md:right-[122px] md:bottom-[-35px] z-30 ">
            <div className="flex items-center gap-2.5 bg-secondary rounded-[10px] px-5 py-2.5 w-[211px] md:w-[230px] h-[70px]">
              <div className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center shrink-0">
                <Rocket />
              </div>
              <Text className="text-[12px] leading-4 md:text-[14px] md:leading-[22px] text-off-white  font-bold tracking-[0.3%]">
                +45% Conversion in 30 days
              </Text>
            </div>
          </div>
        </div>
      </div>

      <RealityOfLeadership />
    </section>
  );
};

export default PainPoints;
