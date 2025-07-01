"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";
import { delayTime } from "@/lib/helper/delayTime";

// types
import { PricingCardType } from "@/types";

// shadcn components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import PricingCard2 from "./card/pricing-card2";
import { useLocation } from "@/context/location.context";

// Static pricing data
const pricingData = {
  title: "Choose your perfect plan",
  details: "Select the plan that best suits your needs and budget.",
  monthly: [
    {
      name: "Sole Trader",
      price: "£9.99",
      price_label: "month",
      sub_title: "",
      features: [
        { name: "Unlimited Invoices & Quotes", enable: true },
        { name: "Unlimited Expenses & Credit Notes", enable: true },
        { name: "Unlimited Customers and Suppliers", enable: true },
        { name: "Automatic bank feeds", enable: true },
        { name: "Multiple Currencies", enable: true },
        { name: "Chart of Accounts", enable: true },
        { name: "Balance Sheet, Profit & Loss, Income statement", enable: true },
        { name: "Comprehensive reporting", enable: true },
        { name: "1 user", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: false
    },
    {
      name: "Small business",
      price: "£29.99",
      price_label: "month",
      sub_title: "",
      features: [
        { name: "Everything in Sole Trader, plus:", enable: true },
        { name: "Multiple users", enable: true },
        { name: "Advanced reporting", enable: true },
        { name: "Project tracking", enable: true },
        { name: "Inventory management", enable: true },
        { name: "Custom branding", enable: true },
        { name: "Priority support", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "#"
      },
      popular: true
    },
    {
      name: "AI Accounting Agent",
      price: "Coming soon",
      price_label: "month",
      sub_title: "",
      features: [
        { name: "Everything in Small business, plus:", enable: true },
        { name: "AI-powered bookkeeping", enable: true },
        { name: "Automated reconciliation", enable: true },
        { name: "Smart expense categorization", enable: true },
        { name: "Real-time financial insights", enable: true },
        { name: "Advanced tax planning", enable: true },
        { name: "24/7 AI support", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Join Waitlist",
        link: "#"
      },
      popular: false
    }
  ]
};

const MeetingPricing = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { country } = useLocation();

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const getPricingData = () => {
    if (country === "ZA") {
      return {
        ...pricingData,
        monthly: [
          {
            ...pricingData.monthly[0],
            price: "R200",
          },
          {
            ...pricingData.monthly[1],
            price: "R420",
          },
          pricingData.monthly[2], // Keep AI plan unchanged
        ],
      };
    }
    return pricingData;
  };

  const currentPricing = getPricingData();

  return (
    <section className="sec_space1">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={currentPricing.title}
          details={currentPricing.details}
          titleClassName="max-w-[850px]"
        />
        <div className="flex justify-center mt-[30px] lg:mt-[50px]">
          <div className="flex flex-wrap justify-center gap-[40px]">
            {currentPricing.monthly.map((item, i) => (
              <div
                key={`monthly_price_table-${i}`}
                data-delay={delayTime(i + 1)}
                className="has_fade_anim w-full md:w-[calc(33.333%-30px)]"
              >
                <PricingCard2 price={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingPricing;
