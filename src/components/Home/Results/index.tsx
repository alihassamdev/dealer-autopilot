import Text from "@/ui/Text";
import { Currency, DisplayBoard, StarIcon, Users } from "@/ui/icons";
import CountUp from "@/ui/CountUp";

const Results = () => {
  const ResultsData = [
    {
      id: "lead-conversion",
      from: 0,
      to: 45,
      suffix: "%",
      description: "Increase in Lead Conversion",
      Icon: DisplayBoard,
      decimals: 0,
    },
    {
      id: "leads-managed",
      from: 0,
      to: 10000,
      suffix: "+",
      description: "Leads Managed Monthly",
      Icon: Users,
      decimals: 0,
    },
    {
      id: "chargeback-savings",
      from: 0,
      to: 2,
      prefix: "$",
      suffix: "M+",
      description: "Savings on Chargebacks",
      Icon: Currency,
      decimals: 0,
    },
    {
      id: "csi-score",
      from: 0,
      to: 4.9,
      suffix: "/5",
      description: "Improvement in CSI Score",
      Icon: StarIcon,
      decimals: 1,
    },
  ];

  return (
    <section className="pb-[60px]  md:pb-[125px] px-6 ">
      <div className="w-full max-w-[1240px] mx-auto relative flex flex-col items-center ">
        {/* caption / pill */}
        <div className="mb-[87px] md:mb-[50px] bg-primary hover:bg-primary cursor-pointer flex w-[211px] h-[62px]  gap-[10px] px-[40px] py-[20px] items-center justify-center rounded-[12px] tracking-[0.3%] text-[12px] leading-[16px] md:text-[14px] md:leading-[22px] text-off-white transition-opacity font-bold shadow-[0px_5px_50px_-12px_#053556]">
          <div className="shrink-0 w-[10px] h-[10px] rounded-full bg-secondary" />
          Proven Results
        </div>

        {/* heading & subheading */}
        <div className="text-center mb-[50px] md:mb-[80px] ">
          <Text as="h2" className="text-secondary mb-[25px] md:mb-[15px]">
            Numbers That Speak for Themselves
          </Text>
          <Text as="h4">
            Real dealerships achieve real results with Dealer AutoPilot
          </Text>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row justify-center gap-y-[25px] gap-x-[25px] mb-[60px] md:mb-[80px]">
          {ResultsData.map((result) => {
            const IconComponent = result.Icon;
            return (
              <div
                key={result.id}
                className="flex flex-col items-center justify-between text-center w-full md:w-[291px]"
              >
                {/* Icon */}
                <div className="shrink-0 mb-[15px]">
                  <div className="w-10 h-10 rounded-[10px] bg-primary flex items-center justify-center">
                    <IconComponent />
                  </div>
                </div>

                {/* Title with CountUp animation */}
                <Text as="h3" className="mb-[15px] ">
                  {result.prefix && <span>{result.prefix}</span>}
                  <CountUp
                    from={result.from}
                    to={result.to}
                    duration={2}
                    separator=","
                    decimals={result.decimals}
                    direction="up"
                    className="inline-block"
                  />
                  {result.suffix && <span>{result.suffix}</span>}
                </Text>

                {/* Description */}
                <Text>{result.description}</Text>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-primary w-full md:max-w-[730px] p-5 rounded-[12px]">
          <Text as="h4" className="text-off-white font-bold">
            Join over <span className="text-secondary">150 dealerships</span>{" "}
            that already trust Dealer AutoPilot And are seeing results from the
            first month
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Results;
