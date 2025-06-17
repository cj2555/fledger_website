import { notFound } from "next/navigation";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { Metadata } from 'next';

// Components
import FAQ1 from "@/components/elements/faq/faq1";
import IntegrationDetails from "@/components/elements/integration/integration-details";
import MainIntegration from "@/components/elements/integration/main-integration";
import NewsLetter1 from "@/components/elements/newsletter/newsletter1";
import MDXContent from "@/components/tools/mdx-content";

type Props = {
  params: {
    title: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const integrations = getAllPages("/integrations/main");
  const integration = integrations.find((item) => item.slug === params.title);
  
  if (!integration) {
    return {
      title: "Integration Not Found | Fledger",
      description: "The requested integration could not be found.",
    };
  }

  return {
    title: `${integration.data.title} Integration | Fledger`,
    description: integration.data.meta?.meta_description || `Learn how to integrate ${integration.data.title} with Fledger to streamline your accounting workflow.`,
    openGraph: {
      title: `${integration.data.title} Integration | Fledger`,
      description: integration.data.meta?.meta_description || `Learn how to integrate ${integration.data.title} with Fledger to streamline your accounting workflow.`,
      url: `https://www.fledger.co.uk/integration/${params.title}`,
      siteName: "Fledger",
      locale: "en_GB",
      type: "article",
    },
    alternates: {
      canonical: `https://www.fledger.co.uk/integration/${params.title}`
    }
  };
}

export default function Page({ params }: Props) {
  const integrations = getAllPages("/integrations/main");

  if (!(integrations && integrations.length)) {
    notFound();
  }

  const integration = integrations.find((item) => item.slug === params.title);
  if (!integration) {
    notFound();
  }

  const faq = getMainPage("/faqs/faq1.mdx");

  return (
    <main>
      <IntegrationDetails integration={integration}>
        <div className="integration_details">
          <MDXContent content={integration.content} />
        </div>
      </IntegrationDetails>
      <MainIntegration
        integration={getMainPage("/integrations/main/_index.mdx")}
        integrations={integrations}
      />
      <FAQ1 faq={faq} />
      <NewsLetter1 />
    </main>
  );
}
