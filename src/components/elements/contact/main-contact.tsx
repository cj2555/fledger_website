"use client";

import { useRef } from "react";
import Image from "next/image";
import siteConfig from "@/config/siteConfig.json";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import TitleSection1 from "@/components/shared/title-section/title-section1";
import Title1 from "@/components/shared/title/title1";
import ContactForm from "./contact-form";
import TitleSection2 from "@/components/shared/title-section/title-section2";
import ContactInfoCards from "./contact-info-cards";

type Props = {};

const MainContact = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { footer_info } = siteConfig;
  const { address } = footer_info;

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px] sec_space_bottom1">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title="We’d love to talk to you"
          sub_title="Contact us"
          details="We help organizations solve their most pressing problems. Please use the following options to contact us, so we can better understand your organization’s needs and how we can help. For any questions or concerns, feel free to reach 
out to us through our contact form, and we’ll get back to you as soon as possible."
          titleClassName="max-w-[750px]"
          detailsClassName="max-w-[720px]"
        />
        
        <div className="flex flex-col lg:flex-row gap-12 pt-[60px] md:pt-[90px] xl:pt-[120px] 2xl:pt-[180px]">
          <div className="lg:w-1/2 xl:pr-8">
            <div className="max-w-[600px] mx-auto lg:mx-0">
              <ContactInfoCards />
            </div>
          </div>

          <div className="lg:w-1/2 has_fade_anim xl:pl-8" data-delay="0.30">
            <h3 className="text-[24px]">Contact us:</h3>
            <div className="mt-[26px] xl:mt-[56px]">
              <ContactForm />
            </div>
          </div>
        </div>
        
        <div className="has_fade_anim mt-[60px]" data-delay="0.60">
          <iframe
            src={address.iframe_src}
            width="100%"
            height="580"
            allowFullScreen
            loading="lazy"
            className="rounded-[10px] lg:rounded-theme border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MainContact;
