import Text from "@/components/ui/Text";
import { FlashIcon, NotesPad, PhoneIcon } from "@/components/ui/icons";
import ContactForm from "./ContactForm";
import BadgeButton from "@/components/ui/BadgeButton";

const ContactUS = () => {
  return (
    <section className="w-full pt-[133px] md:pt-[195px] px-6 ">
      <div className="w-full max-w-[1240px] mx-auto relative z-20 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-[66px] md:gap-[100px] items-center">
          {/* LEFT: content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left  w-full md:max-w-[534px]">
            <BadgeButton
              dotColor="bg-primary"
              className="mb-[59px] md:mb-[30px] bg-secondary hover:bg-secondary w-[172px] h-[56px]  md:w-[184px] md:h-[55px]"
            >
              Start Today
            </BadgeButton>

            {/* heading & subheading */}
            <div>
              <Text as="h3" className="text-white mb-[25px]">
                Ready to Transform Your Dealership?
              </Text>
              <Text className="text-off-white font-bold">
                Schedule a personalized demo and discover how Dealer AutoPilot
                can help you capture more leads, reduce chargebacks, and improve
                your CSI.
              </Text>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-[50px] mt-[25px] md:mt-[50px]">
              <li className="flex flex-col md:flex-row items-center gap-5">
                <div className="flex-none bg-primary w-10 h-10 rounded-[10px] p-2 ">
                  <NotesPad />
                </div>
                <div>
                  <Text as="h4" className="mb-[5px] text-white">
                    For Dealerships
                  </Text>
                  <Text className=" text-white">
                    Customized solution for dealerships of all sizes
                  </Text>
                </div>
              </li>

              <li className="flex flex-col md:flex-row items-center gap-5">
                <div className="flex-none bg-primary w-10 h-10 rounded-[10px] p-2 ">
                  <PhoneIcon />
                </div>
                <div>
                  <Text as="h4" className="mb-[5px] text-white">
                    24/7 Support
                  </Text>
                  <Text className=" text-white">
                    Our team is available whenever you need it
                  </Text>
                </div>
              </li>

              <li className="flex flex-col md:flex-row items-center gap-5">
                <div className="flex-none bg-primary w-10 h-10 rounded-[10px] p-2 ">
                  <FlashIcon />
                </div>
                <div>
                  <Text as="h4" className="mb-[5px] text-white">
                    Fast Implementation
                  </Text>
                  <Text className=" text-white">
                    Start seeing results in less than 48 hours
                  </Text>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT: Form  */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
