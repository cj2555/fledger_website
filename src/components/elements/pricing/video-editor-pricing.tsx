"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";
import { delayTime2 } from "@/lib/helper/delayTime";

// types
import { PricingCardType } from "@/types";

// shadcn components
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import PricingCard8 from "./card/pricing-card8";
import { useLocation } from "@/context/location.context";

type Props = {
  pricing: {
    data: {
      title: string;
      details: string;
      monthly: PricingCardType[];
      yearly: PricingCardType[];
    };
  };
  className?: string;
};

const VideoEditorPricing = ({ pricing, className }: Props) => {
  const { title, details } = pricing.data;
  const containerRef = useRef<HTMLDivElement>(null!);
  const { country } = useLocation();

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const getPricingData = () => {
    const aiPlan = {
      name: "AI Accounting Agent",
      price: "Coming soon",
      price_label: "-",
      details: "Experience the future of accounting with our AI-powered solution. Automate tasks, gain insights, and make data-driven decisions.",
      action_btn: { label: "Get Started", link: "/contact", enable: true }
    };

    if (country === "ZA") {
      return [
        {
          name: "Sole Trader",
          price: "R200",
          price_label: "per month",
          details: "Streamline your accounting with our intuitive software designed for sole traders. Manage your finances efficiently and make informed decisions.",
          action_btn: { label: "Get Started", link: "/contact", enable: true }
        },
        {
          name: "Small business",
          price: "R420",
          price_label: "per month",
          details: "Take your small business to the next level with our comprehensive accounting solution. Simplify your financial management and focus on growth.",
          action_btn: { label: "Get Started", link: "/contact", enable: true }
        },
        aiPlan
      ];
    }
    return [
      {
        name: "Sole Trader",
        price: "£9.99",
        price_label: "per month",
        details: "Streamline your accounting with our intuitive software designed for sole traders. Manage your finances efficiently and make informed decisions.",
        action_btn: { label: "Get Started", link: "/contact", enable: true }
      },
      {
        name: "Small business",
        price: "£29.99",
        price_label: "per month",
        details: "Take your small business to the next level with our comprehensive accounting solution. Simplify your financial management and focus on growth.",
        action_btn: { label: "Get Started", link: "/contact", enable: true }
      },
      aiPlan
    ];
  };

  return (
    <section className={cn("sec_space_top4", className)}>
      <div className="bg-[#F7FAF9] py-[60px]" ref={containerRef}>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="max-w-[630px]"
          detailsClassName="max-w-[630px]"
        />
        <div className="flex justify-center mt-[30px] lg:mt-[50px]">
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-[30px] relative z-[2] has_fade_anim"
            data-delay="0.25"
          >
            {getPricingData().map((item, i) => (
              <div key={`price_table-${i}`}>
                <PricingCard8 
                  price={item} 
                  bgImage={
                    i === 0 ? "/assets/bg/pricingBGFirst.svg" : 
                    i === 1 ? "/assets/bg/pricingBGMiddle.svg" : 
                    "/assets/bg/pricingBgLast.svg"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditorPricing;
