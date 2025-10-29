import Image from "next/image";

import Text from "@/components/ui/Text";
import { GoogleReviews, SadEmojiFace, StockDown } from "@/components/ui/icons";

import dotGrid from "@/public/images/pain-points/dot-grid.png";

export const RealityOfLeadership = () => {
  return (
    <div className="relative">
      {/* bg grid dots */}
      <div className="absolute h-[204px] inset-x-0 top-[-18px] md:top-0 z-0 ">
        <Image
          src={dotGrid}
          alt="dots_vector"
          fill
          className="w-full h-[204px] object-cover"
        />
      </div>

      <div className="relative px-6 pt-[138px] md:pt-[110px]">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center">
          {/* caption / pill */}
          <div className="mb-20 md:mb-[50px] bg-primary flex w-[287px] h-14 md:w-[318px] md:h-[62px] gap-2.5 px-10 py-5 items-center justify-center rounded-[12px] tracking-[0.3%] text-[12px] leading-4 md:text-[14px] md:leading-[22px] text-off-white transition-opacity font-bold">
            <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-secondary" />
            The Reality Of The Dealership
          </div>

          {/* heading & subheading */}
          <div className="text-center mb-[55px] md:mb-[100px] ">
            <Text as="h3" className="text-secondary mb-11 md:mb-2.5">
              These Problems Cost You Money Every Day
            </Text>
            <Text as="h4" className=" text-off-white">
              What if we could automatically prevent things from falling through
              the cracks?
            </Text>
          </div>

          <div className="mb-[50px] md:mb-[100px]">
            <div className="flex flex-wrap flex-col md:flex-row justify-center gap-[25px]">
              {/* Card 1 */}
              <div className="w-full md:w-[396px] h-auto md:h-[200px] relative border border-secondary pt-5 pb-[15px] px-[27px] md:pt-2.5 md:px-5 ">
                <div className="flex flex-col md:flex-row gap-2.5 items-center  md:items-start">
                  <div>
                    <StockDown />
                  </div>
                  <div className="mx-auto text-center md:text-left w-full md:max-w-[283px]">
                    <Text
                      as="h4"
                      className="text-secondary font-semibold mb-2.5 text-[18px] leading-[26px]"
                    >
                      37% of your potential customers are going to other
                      distributors.
                    </Text>
                    <Text className="text-off-white/80 text-[15px] leading-6">
                      And your sales team doesn’t even know? Every lost
                      potential customer is a lost sale.
                    </Text>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-full md:w-[396px] h-auto md:h-[200px] relative border border-secondary pt-5 pb-[15px] px-[27px] md:pt-2.5 md:px-5 ">
                <div className="flex flex-col md:flex-row gap-2.5 items-center  md:items-start">
                  <div>
                    <GoogleReviews />
                  </div>
                  <div className="mx-auto text-center md:text-left w-full ">
                    <Text
                      as="h4"
                      className="text-secondary font-semibold mb-2.5 text-[18px] leading-[26px]"
                    >
                      Google reviews that could have been avoided.
                    </Text>
                    <Text className="text-off-white/80 text-[15px] leading-6">
                      Have you ever received negative feedback? What if you
                      could know about every issue before it goes public?
                    </Text>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="w-full md:w-[396px] h-auto md:h-[200px] relative border border-secondary pt-5 pb-[15px] px-[27px] md:pt-2.5 md:px-5 ">
                <div className="flex flex-col md:flex-row gap-2.5 items-center  md:items-start">
                  <div>
                    <SadEmojiFace />
                  </div>
                  <div className="mx-auto text-center md:text-left w-full ">
                    <Text
                      as="h4"
                      className="text-secondary font-semibold mb-2.5 text-[18px] leading-[26px]"
                    >
                      What if you, as the dealer, knew about every problem
                      before it became a problem?
                    </Text>
                    <Text className="text-off-white/80 text-[15px] leading-6">
                      You’d stay ahead, fix issues faster, and never lose a
                      customer again.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center ">
            <Text as="h3" className="text-secondary">
              Dealer AutoPilot
              <br />
              <span className="text-off-white">
                helps you track, recover, and convert every opportunity
                <br />
                —before it’s too late
              </span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
