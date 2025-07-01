"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { delayTime2 } from "@/lib/helper/delayTime";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  feature: {
    data: {
      title: string;
      details: string;
      items: {
        name: string;
        details: string | JSX.Element;
        icon: string;
      }[];
    };
  };
};

const StartupFeature2 = ({ feature }: Props) => {
  const { title, details, items } = feature.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-[#EDF4F3] max-w-[1290px] mx-auto rounded-theme sec_space4">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="max-w-[695px]"
          detailsClassName="max-w-[695px]"
        />
        {items && items.length > 0 && (
          <div className="mt-[20px] md:mt-[40px] lg:mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[30px] mx-[20px] xl:mx-[70px] justify-center">
            {items.map((item, i) => (
              <div
                key={`feature_item-${i}`}
                className="has_fade_anim"
                data-delay={delayTime2(i + 1)}
              >
                <div className="group rounded-theme bg-white p-[15px] md:p-[50px] flex flex-col items-center text-center transition duration-300 ease-in-out hover:scale-105">
                  {item.icon && (
                    <div className="mb-[38px]">
                      <Image
                        width={75}
                        height={75}
                        src={item.icon}
                        alt="icon"
                      />
                    </div>
                  )}
                  <h3 className="mb-[19px] text-[24px]">{item.name}</h3>
                  <div className="group-hover:text-primary">
                    {typeof item.details === 'string' ? (
                      <p>{item.details}</p>
                    ) : (
                      item.details
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StartupFeature2;
