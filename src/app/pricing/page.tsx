import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import MeetingPricing from '@/components/elements/pricing/meeting-pricing';
import StartupFAQ from '@/components/elements/faq/startup-faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fledger Pricing | Accounting Software Pricing Plan UK",
  description: "Fledger's affordable monthly and annual plans designed to simplify accounting for freelancers, entrepreneurs, and small businesses. Get started today!",
  openGraph: {
    title: "Fledger Pricing | Accounting Software Pricing Plan UK",
    description: "Fledger's affordable monthly and annual plans designed to simplify accounting for freelancers, entrepreneurs, and small businesses. Get started today!",
    url: "https://www.fledger.co.uk/pricing",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fledger.co.uk/pricing"
  }
};

export default function TextPage() {
  const cta = getMainPage("/ctas/cta7.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");

  return (
    <main className='container mt-20'>
      <MeetingPricing />
      <StartupFAQ faq={faq} />
      <div className='container py-10'>
        <CTA7 cta={cta} />
      </div>
    </main>
  );
}

