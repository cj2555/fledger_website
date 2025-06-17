import { getMainPage } from "@/lib/helper/contentConverter";
import { Metadata } from 'next';

// Components
import PrivacyPolicy1 from "@/components/elements/privacy-policy/privacy-policy1";

export const metadata: Metadata = {
  title: "Fledger Privacy Policy | Your Data Security Matters",
  description: "Read how Fledger protects your privacy and data while delivering secure, reliable cloud accounting software for UK businesses.",
  openGraph: {
    title: "Fledger Privacy Policy | Your Data Security Matters",
    description: "Read how Fledger protects your privacy and data while delivering secure, reliable cloud accounting software for UK businesses.",
    url: "https://www.fledger.co.uk/privacy-policy",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fledger.co.uk/privacy-policy"
  }
};

export default function Page() {
  const privacy = getMainPage("/privacy-policies/privacy-policy1.mdx");

  return (
    <main>
      <PrivacyPolicy1 privacy={privacy} />
    </main>
  );
}
