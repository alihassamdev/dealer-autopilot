"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";
import { GoogleReviews, SadEmojiFace, StockDown } from "@/components/ui/icons";
import AOS from "aos";

import ScrollFillText from "@/components/ui/ScrollFillText";

import dotGrid from "@/public/images/pain-points/dot-grid.png";
import borderDesktop from "@/public/images/pain-points/border-image-desktop.png";
import borderMobile from "@/public/images/pain-points/border-image-mobile.png";
import BadgeButton from "@/components/ui/BadgeButton";

gsap.registerPlugin(ScrollTrigger);

export const RealityOfDealership = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const scrollFillTextRef = useRef<HTMLHeadingElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const scrollFillText = scrollFillTextRef.current;
    const textContainer = textContainerRef.current;

    if (!section || !cardsContainer || !scrollFillText || !textContainer)
      return;

    // Check if mobile (viewport width < 768px)
    const isMobile = window.innerWidth < 768;

    // Desktop: GSAP scroll animations
    if (!isMobile) {
      // Phase 2: Text animation - starts when text enters viewport, animates until it reaches center
      // Initially disabled, will be enabled after cards animation completes
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollFillText,
          start: "bottom bottom", // Start when text enters viewport
          end: "center center", // End when text reaches center
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate text fill from 0% to 100%
      textTimeline.fromTo(
        scrollFillText,
        {
          "--fill": "0%",
        },
        {
          "--fill": "100%",
          ease: "none",
        }
      );

      // Get the ScrollTrigger instance and disable it initially
      const textScrollTrigger = textTimeline.scrollTrigger;
      if (textScrollTrigger) {
        textScrollTrigger.disable();
      }

      // Phase 1: Animate cards while pinned
      const cardsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%", // Scroll distance for cards animation
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onLeave: () => {
            // Cards animation complete and user scrolled past, enable text animation
            if (textScrollTrigger) {
              textScrollTrigger.enable();
              textScrollTrigger.refresh();
            }
          },
        },
      });

      // Animate the container (all cards together) from right to center
      cardsTimeline.fromTo(
        cardsContainer,
        {
          x: "100vw",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          immediateRender: false,
        }
      );

      // Also enable text animation when cards timeline completes
      cardsTimeline.eventCallback("onComplete", () => {
        if (textScrollTrigger) {
          textScrollTrigger.enable();
          textScrollTrigger.refresh();
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (
            trigger.vars.trigger === section ||
            trigger.vars.trigger === scrollFillText
          ) {
            trigger.kill();
          }
        });
        cardsTimeline.kill();
        textTimeline.kill();
      };
    } else {
      // Mobile: AOS handles card animations, setup ScrollFillText animation
      // Text animates from when it enters viewport until it reaches center
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollFillText,
          start: "bottom bottom", // Start when text enters viewport
          end: "center center", // End when text reaches center
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate text fill from 0% to 100%
      textTimeline.fromTo(
        scrollFillText,
        {
          "--fill": "0%",
        },
        {
          "--fill": "100%",
          ease: "none",
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === scrollFillText) {
            trigger.kill();
          }
        });
        textTimeline.kill();
      };
    }
  }, []);

  // Conditionally add/remove AOS attributes based on screen size
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      if (card1Ref.current && card2Ref.current && card3Ref.current) {
        if (isMobile) {
          // Add AOS attributes on mobile
          card1Ref.current.setAttribute("data-aos", "fade-right");
          card1Ref.current.setAttribute("data-aos-duration", "800");
          card2Ref.current.setAttribute("data-aos", "fade-left");
          card2Ref.current.setAttribute("data-aos-duration", "800");
          card2Ref.current.setAttribute("data-aos-delay", "100");
          card3Ref.current.setAttribute("data-aos", "fade-right");
          card3Ref.current.setAttribute("data-aos-duration", "800");
          card3Ref.current.setAttribute("data-aos-delay", "200");
        } else {
          // Remove AOS attributes on desktop
          card1Ref.current.removeAttribute("data-aos");
          card1Ref.current.removeAttribute("data-aos-duration");
          card2Ref.current.removeAttribute("data-aos");
          card2Ref.current.removeAttribute("data-aos-duration");
          card2Ref.current.removeAttribute("data-aos-delay");
          card3Ref.current.removeAttribute("data-aos");
          card3Ref.current.removeAttribute("data-aos-duration");
          card3Ref.current.removeAttribute("data-aos-delay");
        }

        // Refresh AOS to apply changes
        AOS.refresh();
      }
    };

    // Set initial state
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden" ref={sectionRef}>
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
          <BadgeButton className="shadow-md mb-20 md:mb-[50px] w-[287px] h-14 md:w-[318px] md:h-[62px]">
            The Reality Of The Dealership
          </BadgeButton>

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
            <div
              ref={cardsContainerRef}
              className="md:flex flex-wrap flex-col md:flex-row justify-center gap-[25px]"
            >
              {/* Card 1 */}
              <div
                ref={card1Ref}
                className="w-full md:w-[396px] h-auto md:h-[200px] relative flex flex-col md:flex-row gap-2.5 items-center md:items-start justify-center text-center md:text-left p-5 md:px-6 md:py-4"
              >
                {/* Background Image for Desktop */}
                <Image
                  src={borderDesktop}
                  alt="border frame"
                  fill
                  className="hidden md:block object-fill pointer-events-none select-none z-0"
                />

                {/* Background Image for Mobile */}
                <Image
                  src={borderMobile}
                  alt="border frame mobile"
                  fill
                  className="block md:hidden object-fill pointer-events-none select-none z-0"
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col md:flex-row gap-2.5 items-center md:items-start">
                  <div>
                    <StockDown />
                  </div>
                  <div className="mx-auto md:mx-0 w-full md:max-w-[283px]">
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
              <div
                ref={card2Ref}
                className="w-full md:w-[396px] h-auto md:h-[200px] relative pt-5 pb-[15px] px-[27px] md:pt-2.5 md:px-5 "
              >
                {/* Background Image for Desktop */}
                <Image
                  src={borderDesktop}
                  alt="border frame"
                  fill
                  className="hidden md:block object-fill pointer-events-none select-none z-0"
                />

                {/* Background Image for Mobile */}
                <Image
                  src={borderMobile}
                  alt="border frame mobile"
                  fill
                  className="block md:hidden object-fill pointer-events-none select-none z-0"
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-2.5 items-center  md:items-start">
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
              <div
                ref={card3Ref}
                className="w-full md:w-[396px] h-auto md:h-[200px] relative pt-5 pb-[15px] px-[27px] md:pt-2.5 md:px-5 "
              >
                {/* Background Image for Desktop */}
                <Image
                  src={borderDesktop}
                  alt="border frame"
                  fill
                  className="hidden md:block object-fill pointer-events-none select-none z-0"
                />

                {/* Background Image for Mobile */}
                <Image
                  src={borderMobile}
                  alt="border frame mobile"
                  fill
                  className="block md:hidden object-fill pointer-events-none select-none z-0"
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-2.5 items-center  md:items-start">
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

          <div className="text-center " ref={textContainerRef}>
            <Text as="h3" className="text-secondary">
              Dealer AutoPilot
              <br />
              {/* <span className="text-off-white">
                helps you track, recover, and convert every opportunity
                <br />
                —before it's too late
              </span> */}
            </Text>
            <ScrollFillText ref={scrollFillTextRef} autoPlay={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
