import SEOCounter from '@/components/elements/counter/seo-counter';
import SEOFeature from '@/components/elements/feature/seo-feature';
import SeoData from '@/components/tools/seo-data';
import React from 'react';
import { getMainPage } from '@/lib/helper/contentConverter';
import CTA7 from '@/components/elements/cta/cta7';
import MeetingPricing from '@/components/elements/pricing/meeting-pricing';
import StartupFAQ from '@/components/elements/faq/startup-faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fledger Privacy Policy | Your Data Security Matters",
  description: "Read how Fledger protects your privacy and data while delivering secure, reliable cloud accounting software for UK businesses.",
  openGraph: {
    title: "Fledger Privacy Policy | Your Data Security Matters",
    description: "Read how Fledger protects your privacy and data while delivering secure, reliable cloud accounting software for UK businesses.",
    url: "https://www.fledger.co.uk/privacy",
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

      <div className='container'>
        <div className="min-h-screen bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">

            <div id="privacy-header" className="text-center my-20">
              <h1 className="text-4xl font-semibold text-[#242626] mb-4">Privacy Policy</h1>
              <p className="text-[#727979] text-lg">Our Personal statement, cookies, third-parties. Thank you for using Fledger! Our privacy policy details how we handle your info. By using Fledger, you agree to these practices.</p>
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

            {/* Information Section */}
            <div id="information-section" className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-4">
                <h2 className="text-2xl font-semibold text-[#242626]">Information we collect</h2>
              </div>
              <div className="col-span-8">
                <p className="text-[#727979] mb-4">We may collect and process the following types of information:</p>
                <ul className="text-[#727979] space-y-4">
                  <li style={{ lineHeight: '1.5' }}>Personal Identification Information: Name, email address, phone number, and other contact details.</li>
                  <li style={{ lineHeight: '1.5' }}>Financial Information: Bank account details, transaction records, and other financial information necessary for providing our services.</li>
                  <li style={{ lineHeight: '1.5' }}>Usage Data: Information about how you use the Software, including your IP address, browser type, and usage patterns.</li>
                  <li style={{ lineHeight: '1.5' }}>Device Information: Information about the device you use to access the Software, including device type, operating system, and unique device identifiers.</li>
                </ul>
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

            {/* Disclosure Section */}
            <div id="disclosure-section" className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-4">
                <h2 className="text-2xl font-semibold text-[#242626]">Disclosure of your information</h2>
              </div>
              <div className="col-span-8">
                <div className="text-[#727979] space-y-6">
                  <p>We may share your information in the following circumstances:</p>
                  <ul className="space-y-4">
                    <li style={{ lineHeight: '1.5' }}>With Service Providers: We may share your information with third-party service providers who perform services on our behalf.</li>
                    <li style={{ lineHeight: '1.5' }}>For Legal Reasons: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                    <li style={{ lineHeight: '1.5' }}>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div id="security-section" className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-4">
                <h2 className="text-2xl font-semibold text-[#242626]">Security of your information</h2>
              </div>
              <div className="col-span-8">
                <p className="text-[#727979]">We use administrative, technical, and physical security measures to protect your personal information. While we strive to protect your information, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              </div>
            </div>

            {/* Data Protection Rights Section */}
            <div id="rights-section" className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-4">
                <h2 className="text-2xl font-semibold text-[#242626]">Your data protection rights</h2>
              </div>
              <div className="col-span-8">
                <div className="text-[#727979] space-y-6">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="space-y-4">
                    <li style={{ lineHeight: '1.5' }}>The right to access - You have the right to request copies of your personal data.</li>
                    <li style={{ lineHeight: '1.5' }}>The right to rectification - You have the right to request that we correct any information you believe is inaccurate or complete information you believe</li>
                  </ul>
                </div>
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
};

