"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocation } from "@/context/location.context";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

type ContactInfoItem = {
  title: string;
  icon: string;
  content: string;
  link?: string;
  bgColor: string;
};

type Props = {
  className?: string;
};

const ContactInfoCards = ({ className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { country } = useLocation();

  const getEmailDomain = () => {
    switch (country) {
      case "ZA":
        return "info@fledger.co.za";
      default:
        return "info@fledger.co.uk";
    }
  };

  const contactInfoData: ContactInfoItem[] = [
    {
      title: "Phone",
      icon: "/assets/imgs/icon/phone-icon.svg",
      content: "020-3432-6423",
      link: "tel:02034326423",
      bgColor: "bg-[#F8FAF8]"
    },
    {
      title: "Whatsapp",
      icon: "/assets/imgs/icon/whatsapp-icon.svg",
      content: "020-3432-6423",
      link: "https://wa.me/442034326423",
      bgColor: "bg-[#F8F6FF]"
    },
    {
      title: "Email",
      icon: "/assets/imgs/icon/email-icon.svg",
      content: getEmailDomain(),
      link: `mailto:${getEmailDomain()}`,
      bgColor: "bg-[#F6FAFF]"
    },
    {
      title: "Our Office",
      icon: "/assets/imgs/icon/location-icon.svg",
      content: "34-35 Hatton Garden, Holborn, London, United Kingdom, EC1N 8DX",
      link: "https://maps.google.com/?q=Hatton+Garden,+Holborn,+London,+EC1N+8DX",
      bgColor: "bg-[#FFFCF6]"
    }
  ];

  useGSAP(
    () => {
      // Temporarily comment out the animation to test if it's the cause
      // hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div 
      className={cn(
        "grid gap-4 md:gap-6 lg:gap-8",
        className?.includes("w-full") || className?.includes("w-auto") 
          ? "grid-cols-1" 
          : "grid-cols-1 sm:grid-cols-2"
      )}
      ref={containerRef}
    >
      {contactInfoData.map((item, index) => (
        <div 
          key={`contact-info-${index}`}
          className={cn(
            "rounded-2xl p-8 flex flex-col items-center text-center has_fade_anim",
            item.bgColor
          )}
          data-delay={index * 0.1}
        >
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <Image
              src={item.icon}
              width={50}
              height={50}
              alt={`${item.title} icon`}
            />
          </div>
          
          <h3 className="text-[22px] font-medium text-primary mb-4">
            {item.title}
          </h3>
          
          {item.link ? (
            <Link 
              href={item.link} 
              className={cn(
                "text-lg text-primary hover:underline",
                item.title === "Email" && "text-[#3982E4] underline"
              )}
            >
              {item.content.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </Link>
          ) : (
            <p className="text-lg text-primary">
              {item.content.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfoCards; 