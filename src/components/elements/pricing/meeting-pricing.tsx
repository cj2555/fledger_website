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
      name: "Small Business",
      price: "£29.99",
      price_label: "month",
      sub_title: "",
      features: [
        { name: "Unlimited Invoices & Quotes", enable: true },
        { name: "Unlimited Expenses & Credit Notes", enable: true },
        { name: "Unlimited Customers and Suppliers", enable: true },
        { name: "Automatic Bank Feeds", enable: true },
        { name: "Multiple Currencies", enable: true },
        { name: "Chart of Accounts", enable: true },
        { name: "Balance Sheet, Profit & Loss, Income Statement", enable: true },
        { name: "Advanced reporting", enable: true },
        { name: "Asset management", enable: true },
        { name: "Payroll", enable: true },
        { name: "3 Users", enable: true }
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
      price_label: "",
      sub_title: "",
      features: [
        { name: "Automated Bookkeeping", enable: true },
        { name: "AI-Powered Financial Insights", enable: true },
        { name: "Tax Optimization Recommendations", enable: true },
        { name: "Real-time Financial Reporting", enable: true },
        { name: "Smart Invoice Processing", enable: true },
        { name: "Expense Categorization", enable: true },
        { name: "Financial Forecasting", enable: true },
        { name: "Unlimited Users", enable: true }
      ],
      action_btn: {
        enable: true,
        label: "Join Waitlist",
        link: "#"
      },
      popular: false
    }
  ],
  yearly: []
};

type Props = {
  className?: string;
};

const MeetingPricing = ({ className }: Props) => {
  const { title, details, monthly, yearly } = pricingData;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      className={cn(
        "pt-[51px] md:pt-[81px] xl:pt-[111px] 2xl:pt-[181px]",
        className
      )}
    >
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="max-w-[850px]"
        />
        <Tabs
          defaultValue="monthly"
          className="mt-[33px] xl:mt-[53px] 2xl:mt-[63px]"
        >
          <TabsList className="flex has_fade_anim">
            <div className="bg-[#F0F7F8] rounded-full">
              <TabsTrigger
                value="monthly"
                className="px-[38px] py-[22px] text-[16px] text-white leading-none data-[state=active]:bg-theme rounded-full transition-all duration-300"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="px-[38px] py-[22px] text-[16px] text-primary leading-none data-[state=active]:bg-theme rounded-full transition-all duration-300"
              >
                Yearly
              </TabsTrigger>
            </div>
          </TabsList>
          <div className="flex justify-center mt-[30px] lg:mt-[50px]">
            <TabsContent value="monthly" className="w-full">
              <div className="flex flex-wrap justify-center gap-[40px]">
                {monthly &&
                  monthly.length &&
                  monthly.map((item, i) => (
                    <div
                      key={`monthly_price_table-${i}`}
                      data-delay={delayTime(i + 1)}
                      className="has_fade_anim w-full md:w-[calc(33.333%-30px)]"
                    >
                      <PricingCard2 price={item} />
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="yearly" className="w-full">
              <div className="flex flex-wrap justify-center gap-[40px]">
                {yearly &&
                  yearly.length &&
                  yearly.map((item, i) => (
                    <div
                      key={`yearly_price_table-${i}`}
                      data-delay={delayTime(i + 1)}
                      className="has_fade_anim w-full md:w-[calc(33.333%-30px)]"
                    >
                      <PricingCard2 price={item} />
                    </div>
                  ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default MeetingPricing;
