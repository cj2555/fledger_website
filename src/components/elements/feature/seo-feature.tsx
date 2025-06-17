"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// icon
import { FaArrowUp } from "react-icons/fa6";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  feature: {
    data: {
      title: string;
      sub_title: string;
      details: string;
      main_feature: {
        enable: boolean;
        title: string;
        details: string;
        image: string;
        counter: {
          text: string;
          number: number;
          unit: string;
          prefix: string;
        }[];
        action_btn: ActionBtnType;
      };
      items: {
        title: string;
        details: string;
        image: string;
      }[];
    };
  };
};

const SEOFeature = ({ feature }: Props) => {
  const { title, sub_title, details, main_feature, items } = feature.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space_top2">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title="Foolproof. Fuss-Free. Fledger"
          sub_title="Keeping accounting simple"
          details="Fledger is your ultimate solution for streamlined accounting tailored for sole traders in the UK. Our cutting-edge accounting software is designed to empower you with the tools you need to manage your finances efficiently, 
so you can focus on what you do best—growing your business.
"
          titleClassName="max-w-[750px]"
          detailsClassName="max-w-[720px]"
        />
        <div className="mt-[33px] xl:mt-[43px] 2xl:mt-[63px]">
       
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between p-[25px] lg:p-[55px] gap-x-[60px] gap-y-[30px] mb-[30px] bg-[#F7FAF9] rounded-theme">
              <div className="max-w-[535px] lg:max-w-full mx-auto lg:mx-0">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-[100px] h-[100px] rounded-full   flex items-center justify-center">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/imgs/feature/settingsLogo.svg"
                      alt="settings logo"
                    />
                  </div>
                </div>
                <h3 className="text-[28px] md:text-[36px] font-bold text-center lg:text-left has_fade_anim">
                  Organisation and Efficiency
                </h3>
                <p className="mt-[18px] text-center lg:text-left has_fade_anim">
                  Billing software centralise financial data, streamlining invoice creation and management, reducing errors, and saving time.
                </p>
                <div className="mt-[30px] space-y-[20px] has_fade_anim">
                  <div className="flex items-start gap-4">
                    <div className="text-[#7ED3B2] mt-1">
                      <Image
                        width={24}
                        height={24}
                        src="/assets/imgs/feature/fledgerFetherLogo.svg"
                        alt="fether logo"
                      />
                    </div>
                    <p className="text-[18px] font-medium">Smart, Adaptive, and Easy-to-use Accounting software.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[#7ED3B2] mt-1">
                    <Image
                        width={24}
                        height={24}
                        src="/assets/imgs/feature/fledgerFetherLogo.svg"
                        alt="fether logo"
                      />
                    </div>
                    <p className="text-[18px] font-medium">Cloud-based, multi-user accessibility.</p>
                  </div>
                </div>
              </div>
              <div className="has_fade_anim flex justify-center lg:justify-end">
                {main_feature.image && (
                  <Image
                    width={741}
                    height={163}
                    src='/assets/imgs/feature/dahsboardImageForFeature.svg'
                    alt="feature image"
                    style={{
                     height: '363px',
                     width: '541px',
                    }}
                  />
                )}
              </div>
            </div>
         
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div
                  className="bg-[#FBF8F4] rounded-theme p-[25px] lg:pt-[48px] lg:pb-0 lg:px-[100px] text-center"
                >
                  <div className="flex justify-center mb-6 has_fade_anim">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/imgs/feature/invoiceLogo.svg"
                      alt="fledger logo"
                    />
                  </div>
                  <div>
                    <h3 className="text-[24px] md:text-[30px] has_fade_anim">
                    Automated Invoicing
                    </h3>
                    <p className="mt-[18px] has_fade_anim">
                    Billing software automates invoicing, enabling recurring invoices for regular clients, saving time, and 
ensuring timely billing.
 </p>
                  </div>
                    <div className="mt-[43px] has_fade_anim">
                      <Image
                        width={520}
                        height={376}
                        src="/assets/imgs/feature/dahsboardImageForFeature.svg"
                        data-fade-offset="0"
                        alt="feature image"
                      />
                    </div>
                </div>
                <div
                  className="bg-[#F8F5FF] rounded-theme p-[25px] lg:pt-[48px] lg:pb-0 lg:px-[100px] text-center"
                >
                  <div className="flex justify-center mb-6 has_fade_anim">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/imgs/feature/expenseLogo.svg"
                      alt="fledger logo"
                    />
                  </div>
                  <div>
                    <h3 className="text-[24px] md:text-[30px] has_fade_anim">
                    Track Payments and Expenses </h3>
                    <p className="mt-[18px] has_fade_anim">
                    It tracks payments, expenses, and helps manage cash flow, identifying outstanding payments, and 
                    improving budget management. </p>
                  </div>
                    <div className="mt-[43px] has_fade_anim">
                      <Image
                        width={520}
                        height={376}
                        src="/assets/imgs/feature/dahsboardImageForFeature.svg"
                        data-fade-offset="0"
                        alt="feature image"
                      />
                    </div>
                </div>
            </div>
                
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between p-[25px] lg:p-[55px] gap-x-[60px] gap-y-[30px] mb-[30px] bg-[#F5F9FF] rounded-theme mt-[30px]">
              <div className="max-w-[535px] lg:max-w-full mx-auto lg:mx-0">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-[100px] h-[100px] rounded-full   flex items-center justify-center">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/imgs/feature/reportLogo.svg"
                      alt="settings logo"
                    />
                  </div>
                </div>
                <h3 className="text-[28px] md:text-[36px] font-bold text-center lg:text-left has_fade_anim">
                  Organisation and Efficiency
                </h3>
                <p className="mt-[18px] text-center lg:text-left has_fade_anim">
                  Billing software centralise financial data, streamlining invoice creation and management, reducing errors, and saving time.
                </p>
                <div className="mt-[30px] space-y-[20px] has_fade_anim">
                  <div className="flex items-start gap-4">
                    <div className="text-[#7ED3B2] mt-1">
                      <Image
                        width={24}
                        height={24}
                        src="/assets/imgs/feature/fledgerFetherLogoBlue.svg"
                        alt="fether logo"
                      />
                    </div>
                    <p className="text-[18px] font-medium">Smart, Adaptive, and Easy-to-use Accounting software.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[#7ED3B2] mt-1">
                    <Image
                        width={24}
                        height={24}
                        src="/assets/imgs/feature/fledgerFetherLogoBlue.svg"
                        alt="fether logo"
                      />
                    </div>
                    <p className="text-[18px] font-medium">Cloud-based, multi-user accessibility.</p>
                  </div>
                </div>
              </div>
              <div className="has_fade_anim flex justify-center lg:justify-end">
                {main_feature.image && (
                  <Image
                    width={741}
                    height={163}
                    src='/assets/imgs/feature/dahsboardImageForFeature.svg'
                    alt="feature image"
                    style={{
                     height: '363px',
                     width: '541px',
                    }}
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div
                  className="bg-[#FBF8F4] rounded-theme p-[25px] lg:pt-[48px] lg:pb-0 lg:px-[100px] text-center"
                >
                  <div className="flex justify-center mb-6 has_fade_anim">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/imgs/feature/taxLogo.svg"
                      alt="fledger logo"
                    />
                  </div>
                  <div>
                    <h3 className="text-[24px] md:text-[30px] has_fade_anim">
                    Automated Invoicing
                    </h3>
                    <p className="mt-[18px] has_fade_anim">
                    Billing software automates invoicing, enabling recurring invoices for regular clients, saving time, and 
ensuring timely billing.
 </p>
                  </div>
                    <div className="mt-[43px] has_fade_anim">
                      <Image
                        width={520}
                        height={376}
                        src="/assets/imgs/feature/dahsboardImageForFeature.svg"
                        data-fade-offset="0"
                        alt="feature image"
                      />
                    </div>
                </div>
                <div
                  className="bg-[#F8F5FF] rounded-theme p-[25px] lg:pt-[48px] lg:pb-0 lg:px-[100px] text-center"
                >
                  <div className="flex justify-center mb-6 has_fade_anim">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/imgs/feature/customerManageLogo.svg"
                      alt="fledger logo"
                    />
                  </div>
                  <div>
                    <h3 className="text-[24px] md:text-[30px] has_fade_anim">
                    Track Payments and Expenses </h3>
                    <p className="mt-[18px] has_fade_anim">
                    It tracks payments, expenses, and helps manage cash flow, identifying outstanding payments, and 
                    improving budget management. </p>
                  </div>
                    <div className="mt-[43px] has_fade_anim">
                      <Image
                        width={520}
                        height={376}
                        src="/assets/imgs/feature/dahsboardImageForFeature.svg"
                        data-fade-offset="0"
                        alt="feature image"
                      />
                    </div>
                </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default SEOFeature;
