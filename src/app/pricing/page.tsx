import SEOCounter from '@/components/elements/counter/seo-counter';
import SEOFeature from '@/components/elements/feature/seo-feature';
import SeoData from '@/components/tools/seo-data';
import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import MeetingPricing from '@/components/elements/pricing/meeting-pricing';
import StartupFAQ from '@/components/elements/faq/startup-faq';
export default function TextPage() {
    const feature = getMainPage("/features/seo-feature.mdx");
    const counter = getMainPage("/counters/seo-counter.mdx");
    const cta = getMainPage("/ctas/cta7.mdx");
  const pricing = getMainPage("/pricings/meeting-pricing.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");

    return (
        <main className='container mt-20'>
           <SeoData />
           <MeetingPricing  className="sec_space_bottom2" />
           
           <StartupFAQ faq={faq} className="bg-[#F7FAF9] p-10" />
           <div className='container py-10'>
            <CTA7 cta={cta} />
           </div>
           
        </main>
    );
};

