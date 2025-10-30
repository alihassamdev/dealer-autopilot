import { PlaneArrow } from "@/components/ui/icons";

const ContactForm = () => {
  return (
    <div className="w-full">
      <form className="bg-white rounded-[16px] p-8 md:p-8 shadow-[0px_25px_50px_-12px_#00000040] text-[#0b2430]">
        <div className="grid grid-cols-1 gap-5 md:gap-6">
          <label className="text-[12px] leading-[16px] md:text-[14px] md:leading-[22px] tracking-[0.3%]">
            Full Name <span>*</span>
            <input
              required
              className="mt-2 w-full rounded-[8px] border border-[#D1D5DC] bg-[#F3F3F5] px-3 py-[5px] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] tracking-[0.2%] min-h-[36px] outline-none focus:ring-2 focus:ring-[#d08c4a]"
              placeholder="Full Name"
            />
          </label>

          <label className="text-[12px] leading-[16px] md:text-[14px] md:leading-[22px] tracking-[0.3%]">
            Dealership Name <span>*</span>
            <input
              required
              className="mt-2 w-full rounded-[8px] border border-[#D1D5DC] bg-[#F3F3F5] px-3 py-[5px] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] tracking-[0.2%] min-h-[36px] outline-none focus:ring-2 focus:ring-[#d08c4a]"
              placeholder="Auto Motors Inc"
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="text-[12px] leading-[16px] md:text-[14px] md:leading-[22px] tracking-[0.3%]">
              Email <span>*</span>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-[8px] border border-[#D1D5DC] bg-[#F3F3F5] px-3 py-[5px] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] tracking-[0.2%] min-h-[36px] outline-none focus:ring-2 focus:ring-[#d08c4a]"
                placeholder="motors@email.com"
              />
            </label>

            <label className="text-[12px] leading-[16px] md:text-[14px] md:leading-[22px] tracking-[0.3%]">
              Phone <span>*</span>
              <input
                type="tel"
                required
                className="mt-2 w-full rounded-[8px] border border-[#D1D5DC] bg-[#F3F3F5] px-3 py-[5px] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] tracking-[0.2%] min-h-[36px] outline-none focus:ring-2 focus:ring-[#d08c4a]"
                placeholder="(555) 123-4567"
              />
            </label>
          </div>

          <label className="text-[12px] leading-[16px] md:text-[14px] md:leading-[22px] tracking-[0.3%]">
            Message
            <textarea
              className="mt-2 w-full rounded-[8px] border border-[#D1D5DC] bg-[#F3F3F5] px-3 py-[5px] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] tracking-[0.2%] min-h-[36px] outline-none h-28 resize-none focus:ring-2 focus:ring-[#d08c4a]"
              placeholder="Tell us about your needs..."
            />
          </label>

          <div className="mt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-[10px] rounded-[12px] bg-secondary px-4 py-[10px] text-[14px] leading-[18px]  md:text-[16px] md:leading-[20px] tracking-[0.8%] font-semibold text-white shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b85a18]"
            >
              <span>Send Message</span>
              <PlaneArrow />
            </button>

            <p className="mt-[20px] md:mt-6 text-charcoal-grey/60 text-center  text-[12px] leading-[16px] font-bold  md:text-[14px] md:leading-[22px] tracking-[0.3%]">
              * Required fields. We will contact you within 24 hours.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
