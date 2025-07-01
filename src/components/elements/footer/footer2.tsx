"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "../common/logo";
import { useLocation } from "@/context/location.context";

type Props = {
  className?: string;
  largeContainer?: boolean;
};

const Footer2 = ({ largeContainer = false, className }: Props) => {
  const { country } = useLocation();

  const isZA = country === "ZA";

  return (
    <footer className={cn(className)}>
      <div className={cn("container", largeContainer && "2xl:max-w-[1630px]")}>
        {/* Mobile layout (logo on top) */}
        <div className="block lg:hidden pt-[40px] pb-[30px]">
          <div className="mb-10">
            <div className="w-[250px] mb-5">
              <Logo
                customWidth={200}
                customHeight={50}
              />
            </div>
            {!isZA && (
              <div className="text-left text-gray-600">
                <p className="text-sm">Hatton Garden, Holborn</p>
                <p className="text-sm">London, EC1N 8DX</p>
              </div>
            )}
            <div className="mt-4 flex items-center">
              <Image 
                src={isZA ? "/assets/imgs/icon/zaflag.svg" : "/assets/imgs/icon/ukflag.svg"} 
                alt={isZA ? "South African Flag" : "UK Flag"} 
                width={20} 
                height={20} 
                className="mr-2" 
              />
              <span className="text-sm">English ({isZA ? "ZA" : "UK"})</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-[20px] font-semibold mb-6">Quick Links</h2>
            <ul className="space-y-3">
              <li className="text-[16px]">
                <Link
                  href="/features"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Features
                </Link>
              </li>
              <li className="text-[16px]">
                <Link
                  href="/pricing"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li className="text-[16px]">
                <Link
                  href="/blog"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="text-[16px]">
                <Link
                  href="/support"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Learn & Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-[20px] font-semibold mb-6">Policies</h2>
              <ul className="space-y-3">
                <li className="text-[16px]">
                  <Link
                    href="/terms-of-use"
                    className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                  >
                    Terms of use
                  </Link>
                </li>
                <li className="text-[16px]">
                  <Link
                    href="/privacy"
                    className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-[16px]">
                  <Link
                    href="/faq"
                    className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold mb-6">Company</h2>
              <ul className="space-y-3">
                <li className="text-[16px]">
                  <Link
                    href="/about"
                    className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                  >
                    About us
                  </Link>
                </li>
                <li className="text-[16px]">
                  <Link
                    href="/contact"
                    className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-7 gap-x-[60px] justify-between pt-[78px] pb-[71px] 2xl:pt-[128px] 2xl:pb-[121px]">
          <div className="col-span-2">
            <h2 className="text-[20px] xl:text-[24px] font-semibold">Quick Links</h2>
            <ul className="mt-[24px]">
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/features"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Features
                </Link>
              </li>
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/pricing"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/blog"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/support"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Learn & Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2">
            <h2 className="text-[20px] xl:text-[24px] font-semibold">Policies</h2>
            <ul className="mt-[24px]">
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/terms-of-use"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Terms of use
                </Link>
              </li>
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/privacy"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/faq"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2">
            <h2 className="text-[20px] xl:text-[24px] font-semibold">Company</h2>
            <ul className="mt-[24px]">
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/about"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  About us
                </Link>
              </li>
              <li className="text-[18px] leading-[30px]">
                <Link
                  href="/contact"
                  className="hover:text-primary hover:tracking-[0.4px] transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 flex flex-col items-end">
            <div className="w-[320px] flex justify-end">
              <Logo
                customWidth={200}
                customHeight={50}
              />
            </div>
            {!isZA && (
              <div className="mt-4 text-right">
                <p className="text-sm">34-35 Hatton Garden, Holborn</p>
                <p className="text-sm">London, United Kingdom, EC1N 8DX</p>
              </div>
            )}
            <div className="mt-4 flex items-center justify-end">
              <Image 
                src={isZA ? "/assets/imgs/icon/zaflag.svg" : "/assets/imgs/icon/ukflag.svg"} 
                alt={isZA ? "South African Flag" : "UK Flag"} 
                width={20} 
                height={20} 
                className="mr-2" 
              />
              <span>English ({isZA ? "ZA" : "UK"})</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center py-[25px] sm:py-[38px] border-t border-[#07203214]">
          {!isZA && (
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-center px-4">
              Fledger Ltd is registered in England and Wales (No. 15074267). All rights reserved.
            </p>
          )}
          {isZA && (
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-center px-4">
              All rights reserved.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
