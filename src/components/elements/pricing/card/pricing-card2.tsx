import Image from "next/image";
import Link from "next/link";

// lib
import { cn } from "@/lib/utils";

// types
import { PricingCardType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

type Props = {
  price: PricingCardType & { bg_image?: string };
};

const PricingCard2 = ({ price }: Props) => {
  const {
    name,
    sub_title,
    price: mainPrice,
    price_label,
    popular,
    features,
    action_btn,
    bg_image
  } = price;
  return (
    <div
      className={cn(
        "border relative rounded-xl p-[30px] xl:py-[40px] text-start bg-white shadow-sm h-full flex flex-col",
        popular ? "border-[#1B8475]" : "border-gray-200"
      )}
    >
      <div className="mb-6">
        <p className={cn(
          "text-[18px] font-medium uppercase",
          popular ? "text-[#1B8475]" : "text-primary"
        )}>
          {name}
        </p>
        <p className="text-[40px] md:text-[45px] mt-4 font-bold text-primary">
          {mainPrice.toLowerCase().includes("coming") ? (
            <span className="text-[36px] text-[#1B8475]">{mainPrice}</span>
          ) : (
            <>
              {mainPrice}
              <span className="text-[16px] text-gray-500 font-normal ml-1">
                {price_label ? `/${price_label}` : ""}
              </span>
            </>
          )}
        </p>
      </div>
      
      <div className="border-t border-dashed border-gray-300 w-full my-6"></div>

      {features && features.length > 0 && (
        <ul className="space-y-4 flex-grow">
          {features.map((feature, i) => (
            <li
              key={`feature-item-${i}${mainPrice}`}
              className={cn(
                "flex items-start text-[16px] py-1",
                !feature.enable && "opacity-60"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className="text-gray-600 ml-3">{feature.name}</span>
            </li>
          ))}
        </ul>
      )}
      
      {action_btn && action_btn.enable && (
        <Link
          href={action_btn.link}
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "full",
            }),
            popular 
              ? "mt-8 bg-[#1B8475] text-white hover:bg-[#1B8475]/90 border-[#1B8475]" 
              : "mt-8 border border-[#1B8475] text-[#1B8475] hover:bg-[#1B8475]/5"
          )}
        >
          {action_btn.label}
        </Link>
      )}
    </div>
  );
};

export default PricingCard2;
