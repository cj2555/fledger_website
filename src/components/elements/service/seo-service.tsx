"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import ServiceCard6 from "./card/service-card6";

type Props = {
  service: {
    data: {
      title: string;
      sub_title: string;
      details: string;
      action_btn: ActionBtnType;
    };
  };
  services: {
    data: {
      title: string;
      short_description: string;
      image: string;
    };
    slug: string;
  }[];
};

const SEOService = ({ service, services }: Props) => {
  const { title, sub_title, details, action_btn } = service.data;
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const pinArea = useRef<HTMLDivElement>(null!);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      // Only apply pin content on non-mobile devices
      if (!isMobile) {
        hasPinContent(pinElement.current, pinArea.current, "top 100px", 1024);
      }
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  return (
    <section className="sec_space1 py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6" ref={containerRef}>
        <div
          className="flex justify-between flex-col xl:flex-row gap-x-[30px] md:gap-x-[60px] gap-y-[30px] md:gap-y-[40px]"
          ref={pinArea}
        >
          <div className="max-w-full xl:max-w-[350px] mb-8 xl:mb-0" ref={pinElement}>
            <TitleSection2
              title={title}
              details={details}
              sub_title="Benefits"
              className="text-start"
              titleClassName="mx-0"
              detailsClassName="mx-0"
            />
            {action_btn && action_btn.enable && (
              <div className="mt-[30px] md:mt-[43px] has_fade_anim">
                <Link
                  href={action_btn.link}
                  className={cn(buttonVariants({ variant: "primary6" }), "rounded-full")}
                >
                  <span className="btn-span" data-text={action_btn.label}>
                    {action_btn.label}
                  </span>
                </Link>
              </div>
            )}
            <div className="mt-6 md:mt-10 has_fade_anim">
              <Image 
                src="/assets/imgs/home/benefit_dashboard.svg" 
                alt="Fledger Dashboard" 
                className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                width={1000}
                height={500}
                style={{
                  marginTop: isMobile ? "40px" : "120px",
                  borderRadius: "10px",
                  maxWidth: "100%",
                }}
                priority
              />
            </div>
          </div>
          <div className="max-w-full xl:max-w-[700px] overflow-x-hidden">
            {services && services.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] sm:gap-y-[50px] md:gap-y-[70px] mx-0 sm:-mx-[30px] md:-mx-[50px]">
                {services.map((service) => (
                  <div
                    key={service.slug}
                    className="border-s border-border has_fade_anim px-3 sm:px-4"
                  >
                    <ServiceCard6 service={service} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOService;
