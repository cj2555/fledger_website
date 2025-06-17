import SEOCounter from '@/components/elements/counter/seo-counter';
import SEOFeature from '@/components/elements/feature/seo-feature';
import SeoData from '@/components/tools/seo-data';
import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import MeetingPricing from '@/components/elements/pricing/meeting-pricing';
import StartupFAQ from '@/components/elements/faq/startup-faq';
import MobileAppFAQ from '@/components/elements/faq/mobile-app-faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fledger Support FAQ | Help with Accounting & Invoicing",
  description: "Find answers to common questions about Fledger's UK accounting software, features, pricing, VAT support, and more.",
  openGraph: {
    title: "Fledger Support FAQ | Help with Accounting & Invoicing",
    description: "Find answers to common questions about Fledger's UK accounting software, features, pricing, VAT support, and more.",
    url: "https://www.fledger.co.uk/faq",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
};

export default function TextPage() {
  const feature = getMainPage("/features/seo-feature.mdx");
  const counter = getMainPage("/counters/seo-counter.mdx");
  const cta = getMainPage("/ctas/cta7.mdx");
  const pricing = getMainPage("/pricings/meeting-pricing.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");

  return (
    <main className='container mt-20'>
      <SeoData />


      <MobileAppFAQ faq={faq} />
    
      

      <div className='container py-10'>
            <CTA7 cta={cta} />
           </div>
    </main>
  );
};

