"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// components
import TitleSection1 from "../shared/title-section/title-section1";
import TitleSection2 from "../shared/title-section/title-section2";

type Props = {
  team: {
    data: {
      title: string;
      details: string;
      items: {
        name: string;
        designation: string;
        image: string;
      }[];
    };
    content: string;
  };
  sliceItem?: number;
  className?: string;
};

const AllTeam = ({ team, sliceItem, className }: Props) => {
  const { title, details, items } = team.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className={cn("sec_space_bottom", className)}>
      <div className="container mt-[100px]" ref={containerRef}>
        <TitleSection2
          className="mb-[63px]"
          title="Fledger is here to assist you manage your accounting."
          sub_title="About Us"
          details="Fledger is your ultimate solution for streamlined accounting tailored for sole traders in the UK. Our cutting-edge accounting software is designed to empower you with the tools you need to manage your finances efficiently, 
so you can focus on what you do best—growing your business.
.
"
          titleClassName="max-w-[750px]"
          detailsClassName="max-w-[720px]"
        />

        {/* Hero Section with Stats */}
      

        <TitleSection2
          className="my-[163px]"
          title="Meet the Team"
          sub_title="Our Team"
          details="Our team is dedicated to empowering your business with cutting-edge solutions and unparalleled support. Let's grow together."
          titleClassName="max-w-[750px]"
          detailsClassName="max-w-[720px]"
        />
        
        {items && items.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px] gap-y-[50px]">
            {(!!sliceItem ? items.slice(0, sliceItem) : items).map(
              (item, i) => (
                <div key={`team_item-${i}`} className="has_fade_anim flex flex-col items-center">
                  <div className="w-[220px] h-[220px] relative rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
                    <Image
                      src={item.image}
                      alt={`${item.name} - ${item.designation}`}
                      fill
                      sizes="220px"
                      className="object-cover object-center"
                      priority={i < 4}
                    />
                  </div>
                  <div className="mt-[25px] text-center">
                    <h3 className="text-[24px] leading-[1.25] font-bold font-colasta">
                      {item.name}
                    </h3>
                    <p className="text-[18px] mt-[5px] leading-none text-gray-600">
                      {item.designation}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllTeam;
