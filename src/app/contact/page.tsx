import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import MainContact from '@/components/elements/contact/main-contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Fledger | Support & Sales for Accounting Software",
  description: "Have questions? Get in touch with Fledger's friendly support team for help with UK small business accounting and software inquiries.",
  openGraph: {
    title: "Contact Fledger | Support & Sales for Accounting Software",
    description: "Have questions? Get in touch with Fledger's friendly support team for help with UK small business accounting and software inquiries.",
    url: "https://www.fledger.co.uk/contact",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fledger.co.uk/contact"
  }
};

export default function TextPage() {
    const cta = getMainPage("/ctas/cta7.mdx");
    return (
        <main className='container mt-20'>
           <MainContact />
           <div className='my-[70px]'>
            <CTA7 cta={cta} />
           </div>
        </main>
    );
}

