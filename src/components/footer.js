"use client";
import {
  Icon,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  FocusLock,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsDiscord,
  BsTiktok,
  BsLinkedin,
  BsLink,
  BsChevronUp,
} from "react-icons/bs";
import React, { useState } from "react";

export default function () {
  const year = new Date().getFullYear();
  return (
    <div className="mt-32">
      
        {/* copyright */}
        <div className="flex flex-col p-8 bg-[#000000] w-full h-1/2 justify-between  gap-8
        md:h-full 
        ">
          {/* <Image height={950} width={950} className="absolute right-0 bottom-0" alt='pattern' src='/pattern1-whiteyellow-pt.webp'/> */}
          {/* <a href='/#about' className="absolute right-6 text-white">กลับขึ้นด้านบน  <Icon as={BsChevronUp}/></a> */}
          <div className="flex flex-col gap-7">
            <Image height={100} width={100} className=" w-[256px]" src='logo_w.svg' alt="Club Logo"/>
            
            <div className="flex flex-row gap-6">
              <a href='/privacy-policy' className='font-semibold text-[#F5F5F7] hover:text-[#AD841F]'>Privacy Policy</a>
              <a href='/terms' className='font-semibold text-[#F5F5F7] hover:text-[#AD841F]'>Terms of Use</a>
              <a href='/acknowledgement' className='font-semibold text-[#F5F5F7] hover:text-[#AD841F]'>Acknowledgement</a>
            </div>
            
          </div>
          <div className="flex items-end justify-between text-white text-[8px] md:text-xs">
            <h1 >Dev Club<br/>
              Faculty of Information and Communication Technology, Mahidol University<br/>
            999 Phuttamonthon 4 Road, <br/>Salaya , Nakhon Pathom 73170<br/> THAILAND<br/>
Version 0.1.0</h1>
          </div>
        </div>
        </div>
  );
}