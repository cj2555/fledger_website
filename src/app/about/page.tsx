import SEOCounter from '@/components/elements/counter/seo-counter';
import SEOFeature from '@/components/elements/feature/seo-feature';
import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import AllTeam from '@/components/elements/all-team';
import Brand1 from '@/components/elements/brand/brand1';
import BrandMetrics from '@/components/elements/brand/brand-metrics';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meet the Team | Fledger UK",
  description: "Fledger provides easy-to-use accounting software designed for UK sole traders. Manage your finances efficiently and focus on growing your business.",
  openGraph: {
    title: "Meet the Team | Fledger UK",
    description: "Fledger provides easy-to-use accounting software designed for UK sole traders. Manage your finances efficiently and focus on growing your business.",
    url: "https://www.fledger.co.uk/about",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
};

export default function TextPage() {
    const team = getMainPage("/teams/team.mdx");
    const brand = getMainPage("/brands/brand1.mdx");
    const brandMetrics = getMainPage("/brands/brand-metrics.mdx");
    const cta = getMainPage("/ctas/cta7.mdx");
    return (
        <main className='container mt-20'>
           <AllTeam
             team={team}
             className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px] relative z-[1]"
           />

           <div className='mb-[70px]'>   
             <BrandMetrics
               brands={brandMetrics.data.brands}
               title={brandMetrics.data.title}
               className=""
             />
           </div>
           <div className='my-[70px]'>
             <CTA7 cta={cta} />
           </div>
        </main>
    );
};

