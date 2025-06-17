import SEOCounter from '@/components/elements/counter/seo-counter';
import SEOFeature from '@/components/elements/feature/seo-feature';
import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fledger Features | Cloud Accounting Tools for Small Businesses",
  description: "Discover Fledger's powerful features—bank feeds, invoicing, VAT, payroll, inventory & more. Designed to simplify accounting for UK small businesses and freelancers.",
  openGraph: {
    title: "Fledger Features | Cloud Accounting Tools for Small Businesses",
    description: "Discover Fledger's powerful features—bank feeds, invoicing, VAT, payroll, inventory & more. Designed to simplify accounting for UK small businesses and freelancers.",
    url: "https://www.fledger.co.uk/features",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fledger.co.uk/features"
  }
};

export default function TextPage() {
    const feature = getMainPage("/features/seo-feature.mdx");
    const counter = getMainPage("/counters/seo-counter.mdx");
    const cta = getMainPage("/ctas/cta7.mdx");
    return (
        <main className='container mt-20'>
           <SEOFeature feature={feature} />
           <div className='my-[70px]'>
            <CTA7 cta={cta} />
           </div>
        </main>
    );
};

