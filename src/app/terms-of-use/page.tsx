import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fledger Terms of Use | Legal Terms for Our Financial Software",
  description: "Review Fledger's terms of use to understand your rights and responsibilities when using our financial and accounting tools for UK businesses.",
  openGraph: {
    title: "Fledger Terms of Use | Legal Terms for Our Financial Software",
    description: "Review Fledger's terms of use to understand your rights and responsibilities when using our financial and accounting tools for UK businesses.",
    url: "https://www.fledger.co.uk/terms-of-use",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fledger.co.uk/terms-of-use"
  }
};

export default function TextPage() {
  const cta = getMainPage("/ctas/cta7.mdx");

  return (
    <main className='container mt-20'>
      <div className='container'>
        <div className="min-h-screen bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">

            <div id="privacy-header" className="text-center my-20">
              <h1 className="text-4xl font-semibold text-[#242626] mb-4">Terms of Use</h1>
              <p className="text-[#727979] text-lg">Welcome to Fledger! By using our software, you agree to the following terms and conditions. Please read carefully before using our services.</p>
            </div>

            {/* Introduction Section */}
            <div id="introduction-section" className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-4">
                <h2 className="text-2xl font-semibold text-[#242626]">Introduction</h2>
              </div>
              <div className="col-span-8">
                <p className="text-[#727979] leading-relaxed">Welcome to Fledger Ltd. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our accounting software, Fledger (&quot;the Software&quot;).</p>
              </div>
            </div>

            {/* Usage Section */}
            <div id="usage-section" className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-4">
                <h2 className="text-2xl font-semibold text-[#242626]">How we use your information</h2>
              </div>
              <div className="col-span-8">
                <ul className="text-[#727979] space-y-4">
                  <li style={{ lineHeight: '1.5' }}>To provide and maintain the Software.</li>
                  <li style={{ lineHeight: '1.5' }}>To manage your account and provide customer support.</li>
                  <li style={{ lineHeight: '1.5' }}>To improve and personalize your experience with the Software.</li>
                  <li style={{ lineHeight: '1.5' }}>To process transactions and send related information.</li>
                  <li style={{ lineHeight: '1.5' }}>To communicate with you about updates, offers, and other information related to the Software.</li>
                  <li style={{ lineHeight: '1.5' }}>To comply with legal obligations and resolve disputes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container py-10'>
        <CTA7 cta={cta} />
      </div>
    </main>
  );
}

