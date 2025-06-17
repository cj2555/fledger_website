"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import Title1 from "@/components/shared/title/title1";
import Newsletter4 from "../newsletter/newsletter4";
// import dashboardImage from "@/assets/imgs/home/fledger_dashboard_image.png";
type Props = {
  hero: {
    data: {
      title: string;
      details: string;
      features: string[];
      image1: string;
      shape1_img: string;
    };
  };
};

const CustomerServiceHero = ({ hero }: Props) => {
  const {
    title,
    details,
    features,
    image1,
    shape1_img,
  } = hero.data;

  const containerRef = useRef<HTMLDivElement>(null!);
  const textRef = useRef<HTMLDivElement>(null!);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const words = ["Accounting", "Invoicing ", "Reporting", "Payroll "];

  useGSAP(
    () => {
      hasFadeAnim();

      // Text rotation animation
      const textElements = gsap.utils.toArray<HTMLElement>(".rotating-text");
      let currentIndex = 0;
      let isAnimating = false;

      const rotateText = () => {
        // Skip if animation is already in progress
        if (isAnimating) return;
        
        isAnimating = true;
        gsap.to(textElements[currentIndex] as HTMLElement, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          onComplete: () => {
            // Hide current text completely
            gsap.set(textElements[currentIndex] as HTMLElement, { 
              opacity: 0,
              y: -20
            });
            
            // Move to next word
            currentIndex = (currentIndex + 1) % words.length;
            
            // Show next text
            gsap.fromTo(
              textElements[currentIndex] as HTMLElement,
              { opacity: 0, y: -20 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.5,
                onComplete: () => {
                  isAnimating = false;
                }
              }
            );
          }
        });
      };

      // Reset all words to hidden except the first one
      const resetWords = () => {
        // Show the first word
        gsap.set(textElements[0] as HTMLElement, { opacity: 1, y: 0 });
        for (let i = 1; i < textElements.length; i++) {
          gsap.set(textElements[i] as HTMLElement, { opacity: 0, y: -20 });
        }
        currentIndex = 0;
        isAnimating = false;
      };

      // Initial setup
      resetWords();

      // Handle visibility change
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // Tab is hidden, clear interval
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        } else {
          // Tab is visible again, reset words and restart interval
          resetWords();
          if (!intervalRef.current) {
            intervalRef.current = setInterval(rotateText, 2500);
          }
        }
      };

      // Add visibility change listener
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Set interval for rotation
      intervalRef.current = setInterval(rotateText, 2500);

      // Clean up interval and event listener
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    },
    { scope: containerRef }
  );

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <section className="pt-[110px] md:pt-[185px] xl:pt-[215px] pb-[65px] md:pb-[95px] xl:pb-[125px] ">
      <div className="container" ref={containerRef}>
        <div className="flex justify-between items-center gap-x-[60px] gap-y-[30px] flex-col lg:flex-row">
          <div className="flex-[auto] lg:flex-[0_1_575px]">
            <div className="has_fade_anim">
              <span className="text-[#58a195] font-medium mb-2 inline-block">INTRODUCING FLEDGER</span>
              <h1 className="text-[40px] md:text-[50px] xl:text-[60px] 2xl:text-[70px] font-bold !leading-[1.1] text-[#333]">
              One simple solution <br />
              for all your online <br />
                <span className="text-[#58a195] relative">
                  <div ref={textRef} className="inline-block relative h-[70px] min-w-[200px]">
                    {words.map((word, index) => (
                      <div 
                        key={index} 
                        className={`rotating-text absolute text-[#58a195] top-0 left-0 w-full ${index !== 0 ? 'opacity-0' : ''}`}
                        style={{ transform: index !== 0 ? 'translateY(-20px)' : 'none' }}
                      >
                        {word}
                        <Image
                          src="/assets/imgs/hero/heroSectionshape.svg"
                          width={320}
                          height={20}
                          alt="Decorative underline"
                          className="absolute left-0 -bottom-3 w-full"
                        />
                      </div>
                    ))}
                  </div>
                </span>
              </h1>
            </div>

            <p className="mt-[34px] text-[18px] leading-[1.6] has_fade_anim" data-delay="0.30">Manage expenses, create professional invoices, track your expenses, and much more – all in one convenient location. Take control of your finances with Fledger
            </p>
            
            {/* <div className="mt-[44px] has_fade_anim" data-delay="0.60">
              {features && features.length > 0 && (
                <ul className="space-y-[10px]">
                  {features.map((item, i) => (
                    <li
                      key={`features_item-${i}`}
                      className="text-[18px] leading-[1.44] flex items-center gap-[10px]"
                    >
                      <Image
                        width={15}
                        height={16}
                        src="/assets/imgs/icon/check-3.png"
                        className="h-[16px] rtl_y"
                        alt="icon image"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div> */}
            
            <div className="mt-[33px] flex gap-4 has_fade_anim" data-delay="0.45">
              <a href="https://app.fledger.co.uk/SignUp" target="_blank" className="inline-flex h-[60px] px-8 items-center justify-center text-white bg-[#58a195] rounded-full text-[18px] font-medium transition-all hover:bg-black">
                Try Free Trial
              </a>
               
            </div>
          </div>
          <div className="flex-[0_1_auto] lg:flex-[0_1_650px] relative w-full z-[1]">
            {image1 && (
              <div className="relative">
                <Image
                  width={750}
                  height={571}
                  src="/assets/imgs/home/fledger_dashboard_image.svg"
                  className="rtl_y rounded-md border border-gray-200 shadow-lg"
                  alt="dashboard image"
                />
                 
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceHero;
