"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type BrandMetric = {
  name: string;
  logo: string;
  // Removed visitors and authority properties
};

type Props = {
  brands: BrandMetric[];
  className?: string;
  title?: string;
};

const BrandMetrics = ({ brands, className, title }: Props) => {
  return (
    <div className={cn("py-12", className)}>
      <div className="container">
        {title && (
          <h2 className="text-center text-2xl font-semibold mb-10">{title}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={`brand-metric-${index}`} 
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition-all hover:shadow-xl"
            >
              <div className="h-24 flex items-center justify-center">
                <Image 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  width={200} 
                  height={80} 
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMetrics; 