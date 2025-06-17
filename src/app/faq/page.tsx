import { getMainPage } from "@/lib/helper/contentConverter";
import { Metadata } from 'next';

// Components
import CTA7 from '@/components/elements/cta/cta7';
import MobileAppFAQ from '@/components/elements/faq/mobile-app-faq';

export const metadata: Metadata = {
  title: "Fledger FAQ | Accounting Software Help & Support",
  description: "Find answers to common questions about Fledger's accounting software. Learn how to use our features, manage your accounts, and get the most from our platform.",
  openGraph: {
    title: "Fledger FAQ | Accounting Software Help & Support",
    description: "Find answers to common questions about Fledger's accounting software. Learn how to use our features, manage your accounts, and get the most from our platform.",
    url: "https://www.fledger.co.uk/faq",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fledger.co.uk/faq"
  }
};

export default function TextPage() {
  const cta = getMainPage("/ctas/cta7.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");

  return (
    <main className='container mt-20'>
      <MobileAppFAQ faq={faq} />
      <div className='container py-10'>
        <CTA7 cta={cta} />
      </div>
    </main>
  );
}

