import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { Metadata } from 'next';

// Components
import CTA3 from "@/components/elements/cta/cta3";
import FAQ1 from "@/components/elements/faq/faq1";
import IntegrationHero from "@/components/elements/integration/integration-hero";
import MainIntegration from "@/components/elements/integration/main-integration";

export const metadata: Metadata = {
  title: "Fledger Integrations | Connect Your Business Tools",
  description: "Seamlessly integrate Fledger with your favorite business tools. Connect bank feeds, payment gateways, and more to streamline your accounting workflow.",
  openGraph: {
    title: "Fledger Integrations | Connect Your Business Tools",
    description: "Seamlessly integrate Fledger with your favorite business tools. Connect bank feeds, payment gateways, and more to streamline your accounting workflow.",
    url: "https://www.fledger.co.uk/integration",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fledger.co.uk/integration"
  }
};

export default function Page() {
  const hero = getMainPage("/integrations/hero-integration.mdx");
  const integration = getMainPage("/integrations/main/_index.mdx");
  const integrations = getAllPages("/integrations/main");
  const faq = getMainPage("/faqs/faq1.mdx");
  const cta = getMainPage("/ctas/cta3.mdx");

  return (
    <main>
      <IntegrationHero hero={hero} />
      <MainIntegration integration={integration} integrations={integrations} />
      <FAQ1 faq={faq} />
      <CTA3 cta={cta} />
    </main>
  );
}
