"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// types
import { PricingCardType } from "@/types";

// shadcn components
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import PricingCard5 from "./card/pricing-card5";

// Static pricing data
const pricingData = {
  title: "Choose the Perfect Plan for Your Business",
  details: "Select the best option that suits your customer service needs. Save with annual billing.",
  monthly: [
    {
      name: "Starter",
      price: "29",
      price_label: "month",
      sub_title: "Essential customer service tools for small businesses",
      features: [
        { name: "Up to 5 team members", enable: true },
        { name: "Basic ticket management", enable: true },
        { name: "Standard reporting", enable: true },
        { name: "Email support (business hours)", enable: true },
        { name: "Knowledge base access", enable: false }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: false,
      button_color: ""
    },
    {
      name: "Pro",
      price: "79",
      price_label: "month",
      sub_title: "Advanced solutions for growing businesses",
      features: [
        { name: "Up to 15 team members", enable: true },
        { name: "Advanced ticket management", enable: true },
        { name: "Detailed analytics dashboard", enable: true },
        { name: "Email & chat support (extended hours)", enable: true },
        { name: "Full knowledge base access", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: true,
      button_color: ""
    },
    {
      name: "Business",
      price: "149",
      price_label: "month",
      sub_title: "Enterprise-grade service for larger companies",
      features: [
        { name: "Unlimited team members", enable: true },
        { name: "Premium ticket & workflow management", enable: true },
        { name: "Advanced reporting & insights", enable: true },
        { name: "24/7 priority support", enable: true },
        { name: "API access & custom integrations", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: false,
      button_color: ""
    }
  ],
  yearly: [
    {
      name: "Starter",
      price: "290",
      price_label: "year",
      sub_title: "Essential customer service tools for small businesses",
      features: [
        { name: "Up to 5 team members", enable: true },
        { name: "Basic ticket management", enable: true },
        { name: "Standard reporting", enable: true },
        { name: "Email support (business hours)", enable: true },
        { name: "Knowledge base access", enable: false }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: false,
      button_color: ""
    },
    {
      name: "Pro",
      price: "790",
      price_label: "year",
      sub_title: "Advanced solutions for growing businesses",
      features: [
        { name: "Up to 15 team members", enable: true },
        { name: "Advanced ticket management", enable: true },
        { name: "Detailed analytics dashboard", enable: true },
        { name: "Email & chat support (extended hours)", enable: true },
        { name: "Full knowledge base access", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: true,
      button_color: ""
    },
    {
      name: "Business",
      price: "1490",
      price_label: "year",
      sub_title: "Enterprise-grade service for larger companies",
      features: [
        { name: "Unlimited team members", enable: true },
        { name: "Premium ticket & workflow management", enable: true },
        { name: "Advanced reporting & insights", enable: true },
        { name: "24/7 priority support", enable: true },
        { name: "API access & custom integrations", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: false,
      button_color: ""
    }
  ]
};

type Props = {
  className?: string;
};

const CustomerServicePricing = ({ className }: Props) => {
  const { title, details, monthly, yearly } = pricingData;

  const [toggleYear, setToggleYear] = useState<boolean>(false);
  const [priceContent, setPriceContent] = useState<PricingCardType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  useEffect(() => {
    toggleYear ? setPriceContent(yearly) : setPriceContent(monthly);
  }, [toggleYear, monthly, yearly]);

  return (
    <section
      className={cn(
        "pt-[43px] md:pt-[73px] xl:pt-[103px] 2xl:pt-[173px] sec_space_bottom1",
        className
      )}
    >
      <div className="container relative" ref={containerRef}>
        <div className="absolute top-[110px] end-full w-[158px]">
          <Image
            width={159}
            height={111}
            src="/assets/imgs/shape/shape-s-30.png"
            data-speed="0.8"
            alt="shape image"
          />
        </div>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="max-w-[720px]"
          detailsClassName="max-w-[710px]"
        />
        <div className="mt-[33px] xl:mt-[53px] 2xl:mt-[63px]">
          <div className="flex justify-center has_fade_anim">
            <div className="relative">
              <div className="flex items-center space-x-2" dir="ltr">
                <Label
                  htmlFor="pricing-mode"
                  className="text-[18px] text-primary font-normal"
                >
                  Monthly
                </Label>
                <Switch
                  id="pricing-mode"
                  checked={toggleYear}
                  onCheckedChange={(value) => setToggleYear(value)}
                  className="bg-[#DEF2E8]"
                />
                <Label
                  htmlFor="pricing-mode"
                  className="text-[18px] text-primary font-normal"
                >
                  Yearly
                </Label>
              </div>
              <div className="hidden md:block absolute top-full start-[calc(100%-10px)] w-max">
                <Image
                  width={76}
                  height={25}
                  src="/assets/imgs/shape/shape-s-17.png"
                  className="rtl_y"
                  alt="shape image"
                />
              </div>
              <h3 className="hidden md:block absolute text-[14px] leading-[1.21] text-center start-[calc(100%+40px)] bottom-[2px] w-max rotate-30 rtl:-rotate-30">
                Save 20% with <br />
                annual plans
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-[30px] lg:mt-[50px]">
            <div className="flex flex-wrap justify-center gap-[30px] has_fade_anim" data-delay="0.25">
              {priceContent &&
                priceContent.length > 0 &&
                priceContent.map((item, i) => (
                  <div key={`price_table-${i}`} className="w-full md:w-[calc(50%-15px)] xl:w-[calc(33.333%-20px)]">
                    <PricingCard5 price={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServicePricing;
