"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// components
import Title1 from "@/components/shared/title/title1";
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  faq: {
    data: {
      title: string;
      items: {
        question: string;
        answer: string;
      }[];
    };
    content: string;
  };
};

const MobileAppFAQ = ({ faq }: Props) => {
  const { title, items } = faq.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space4">
      <div className="container" ref={containerRef}>
        <div className="flex flex-col items-center">
          <div className="  text-center mb-10">
          <TitleSection2
          title="Frequently asked questions"
          sub_title="FAQ"
          details="Have questions? Here you’ll find the answers most valued by our partners. Invest in services that drives your business. Clear, straightforward plans tailored to your needs.
"
          titleClassName="max-w-[750px]"
          detailsClassName="max-w-[720px]"
        />
          </div>
          <div className="w-full max-w-[840px]">
            {items && items.length && (
              <Accordion
                type="single"
                collapsible
                className="w-full has_fade_anim"
                defaultValue="item-2"
              >
                {items.map((item, i) => (
                  <AccordionItem
                    key={`accordion_item-${i}`}
                    value={`item-${i + 1}`}
                    className="border-0 overflow-hidden"
                  >
                    <AccordionTrigger className="bg-white text-xl leading-tight text-primary shadow-none text-start font-semibold pt-[21px] lg:pt-[25px] pb-[15px] lg:pb-5 px-[25px] md:px-[30px] border-t border-border rounded-[30px] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-lg leading-[1.44] text-secondary pt-0 pb-[23px] lg:pb-6 p-[25px] m:px-[30px] mt-[7px]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppFAQ;
