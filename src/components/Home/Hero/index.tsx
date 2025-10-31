import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/BadgeButton";

const Hero = () => {
  return (
    <section className="px-5 pb-[100px] md:pb-[68px]">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="mb-[55px] md:mb-[68px]">
          <AnimatedText
            text="Empower your dealership with an AI that never misses an opportunity"
            colorRanges={[
              { from: 0, to: 1, color: "text-charcoal-grey" }, // "Empower your "
              { from: 2, to: 5, color: "text-primary" }, // "dealership with an AI "
              { from: 6, to: 7, color: "text-charcoal-grey" }, // "that never "
              { from: 8, to: 10, color: "text-secondary" }, // "misses an opportunity"
            ]}
            direction="top"
            delay={0.2}
            className="tracking-[-0.8%] text-[40px] leading-12 md:tracking-[-1.2%] md:text-[64px] md:leading-[70px] font-bold"
          />
        </div>

        {/* Call to Action */}
        <Button className="w-[198px] h-6 md:w-56 md:h-[42px]">
          Real-Time Automotive AI
        </Button>
      </div>
    </section>
  );
};

export default Hero;
