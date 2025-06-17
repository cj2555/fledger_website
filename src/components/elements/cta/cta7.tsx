"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  cta: {
    data: {
      title: string;
      details: string;
      action_btn: {
        enable: boolean;
        link: string;
        image: string;
      };
      action_btn2: {
        enable: boolean;
        link: string;
        image: string;
      };
    };
  };
};

const CTA7 = ({ cta }: Props) => {
  const { title, details, action_btn, action_btn2 } = cta.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section>
      <div className="container" ref={containerRef}>
        <div 
          className="px-[15px] py-[50px] md:p-[70px] lg:px-[60px] lg:pt-[80px] lg:pb-[100px] flex flex-col lg:flex-row justify-between items-start relative overflow-hidden rounded-theme"
          style={{
            backgroundImage: 'url(/assets/bg/ctaBg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="max-w-[600px] z-10">
            <p className="text-[40px] md:text-[50px] lg:text-[60px] font-bold leading-tight text-[#FFFFFF] mb-6">
              Transform your billing process today
            </p>
            <p className="text-[16px] md:text-[18px] text-[#BAE0D8] mb-8">
              Experience professional. Experience Fledger Invest in services that drives your business. Straightforward plans tailored to your needs.
            </p>
            <div className="mt-[18px] md:mt-[28px] flex flex-wrap gap-[20px] has_fade_anim">
              <Link href="/signup" className="bg-[#DDF7A4] text-[#333] py-3 px-8 rounded-full font-medium hover:bg-[#c9e78a] transition-colors">
                Sign up now
              </Link>
              <Link href="/pricing" className="border border-[#DDF7A4] text-[#DDF7A4] py-3 px-8 rounded-full font-medium hover:bg-[#DDF7A4]/10 transition-colors">
                Buy & Save
              </Link>
            </div>
          </div>
          <div className="lg:absolute lg:bottom-0 lg:right-0 mt-10 lg:mt-0 max-w-full lg:max-w-[500px] xl:max-w-[600px] z-0">
            <Image 
              src="/assets/imgs/home/fledger_dashboard_image.svg" 
              alt="Billing dashboard" 
              width={400} 
              height={350}
              className="rounded-lg border border-gray-200 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA7;
