/** @format */

import React from "react";
// import Image from "next/image";
import logo from "@/public/mojologo.svg";
import Text from "../ui/Text";

const GoBacktoHost = () => {
  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center'>
      <div className='w-full max-w-[600px] h-full flex flex-col justify-center items-center px-4 mb-[200px]'>
        <img src={logo.src} alt='image logo' className='mx-auto w-[180px]' />
        <Text className='text-[35px] leading-[36px] mob:leading-[48px] text-center font-semibold mt-4 mb-6 text-white'>
          If you are the owner of this page, please reach out to your host
        </Text>
        <div className='flex justify-center items-center gap-2 text-[#fff]/70'>
          <Text className='text-[18px] font-medium text-[#fff]/70'>
            Contact:
          </Text>
          <a className='font-inter' href='mailto:contact@innovativemojo.com'>
            contact@innovativemojo.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoBacktoHost;
