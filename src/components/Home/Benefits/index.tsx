import Image from "next/image";

import Text from "@/components/ui/Text";
import {
  BellIcon,
  Chat,
  CheckGuard,
  DashboardIcon,
  Processor,
  UserGroup,
} from "@/components/ui/icons";

import carImg from "@/public/images/benefits/car-img.jpg";
import dotsGrid from "@/public/images/benefits/dots-grid.svg";

const Benifits = () => {
  const Features = [
    {
      id: "alerts",
      title: "Real-Time Alerts",
      description:
        "Receive instant notifications when a lead shows signs of abandonment or dissatisfaction.",
      Icon: BellIcon,
    },
    {
      id: "dashboard",
      title: "Smart Dashboard",
      description:
        "Visualize all your key metrics in one place with AI-driven insights.",
      Icon: DashboardIcon,
    },
    {
      id: "tracking",
      title: "Automatic Tracking",
      description:
        "Your finance department automatically tracks to verify customer satisfaction.",
      Icon: UserGroup,
    },
    {
      id: "chargebacks",
      title: "Chargeback Prevention",
      description:
        "Identify and resolve issues before they turn into costly chargebacks.",
      Icon: CheckGuard,
    },
    {
      id: "automation",
      title: "Complete Automation",
      description:
        "Let AI handle repetitive tasks while your team focuses on closing sales.",
      Icon: Processor,
    },
    {
      id: "sms",
      title: "SMS Communication",
      description:
        "Connect with leads and customers directly via text with intelligent automated responses.",
      Icon: Chat,
    },
  ];

  return (
    <section className="pt-[62px] pb-[57px] md:pt-[55px] md:pb-[140px] px-6 ">
      <div className="w-full max-w-[1240px] mx-auto relative ">
        {/* heading & subheading */}
        <div className="text-center mb-[62px] md:mb-[108px] ">
          <Text
            as="h2"
            className="text-secondary mb-[18px] md:mb-[15px] capitalize"
          >
            AI + automation + customer satisfaction
          </Text>
          <Text as="h4">
            Intelligent monitoring that prevents issues, maximizes sales, and
            protects your satisfaction bonuses
          </Text>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-y-28 gap-x-7">
          {/* Left: Image */}
          <div className="w-full md:max-w-[605px] relative">
            <div className="overflow-hidden ">
              {/* Image container with gradient overlay */}
              <div className="relative w-full h-[403px] md:h-[707px] z-20">
                <Image
                  src={carImg}
                  layout="fill"
                  alt="car_img"
                  objectFit="cover"
                  className="transform"
                  priority
                />
                {/* dark gradient overlay to match design */}
                <div className="absolute inset-0 img-overlay-gradient " />
              </div>
            </div>

            {/* Badge overlapping bottom of image */}
            <div className="absolute right-0 md:right-[102px] bottom-[-61px] md:-bottom-7 z-30 ">
              <div className=" bg-secondary rounded-[10px] px-5 py-[23px] w-40 h-[97px] md:w-[186px] md:h-[107px]">
                <Text as="h4" className="text-off-white font-bold">
                  99.9% Uptime
                </Text>
              </div>
            </div>

            {/* dotted decorative strip under image (optional) */}
            <div className="absolute -bottom-[102px] h-[202px] left-0 right-0 pointer-events-none z-0">
              <Image
                src={dotsGrid}
                alt="dots_vector"
                fill
                className="w-full h-[204px] object-cover"
              />
            </div>
          </div>

          {/* Right: Features */}
          <div className="w-full md:max-w-[607px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[25px] gap-x-[25px]">
              {Features.map((feature, index) => {
                const IconComponent = feature.Icon;
                return (
                  <div
                    key={feature.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    className="w-full md:max-w-[291px] flex flex-col items-center md:items-start text-center md:text-left"
                  >
                    {/* Icon */}
                    <div className="shrink-0 mb-[15px]">
                      <div className="w-10 h-10 rounded-[10px] bg-primary flex items-center justify-center">
                        <IconComponent />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <Text as="h4" className="mb-[15px] ">
                      {feature.title}
                    </Text>
                    <Text>{feature.description}</Text>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
