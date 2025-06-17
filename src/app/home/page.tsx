import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { Metadata } from 'next';
import { SEO } from "@/components/common/SEO";

// Components
import CustomerServiceBlog from "@/components/elements/blog/customer-service-blog";
import Brand1 from "@/components/elements/brand/brand1";
import CustomerServiceCounter from "@/components/elements/counter/customer-service-counter";
import CustomerServiceFAQ from "@/components/elements/faq/customer-service-faq";
import CustomerServiceFeature from "@/components/elements/feature/customer-service-feature";
import CustomerServiceFeature2 from "@/components/elements/feature/customer-service-feature2";
import CustomerServiceHero from "@/components/elements/hero/customer-service-hero";
import CustomerServiceIntegration from "@/components/elements/integration/customer-service-integration";
import CustomerServicePricing from "@/components/elements/pricing/customer-service-pricing";
import CustomerServiceRatting from "@/components/elements/rating/customer-service-rating";
import CustomerServiceService from "@/components/elements/service/customer-service-service";
import CustomerServiceTestimonial from "@/components/elements/testimonial/customer-service-testimonial";
import StartupFeature2 from "@/components/elements/feature/startup-feature2";
import SEOService from "@/components/elements/service/seo-service";
import VideoEditorPricing from "@/components/elements/pricing/video-editor-pricing";
import StartupFAQ from "@/components/elements/faq/startup-faq";
import CTA7 from "@/components/elements/cta/cta7";

export const metadata: Metadata = {
  title: "Fledger | Online Accounting Software for UK Small Businesses",
  description: "Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools.",
  metadataBase: new URL('https://www.fledger.co.uk'),
  openGraph: {
    title: "Fledger | Online Accounting Software for UK Small Businesses",
    description: "Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools.",
    url: "https://www.fledger.co.uk",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fledger | Online Accounting Software for UK Small Businesses",
    description: "Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.fledger.co.uk",
  },
};

export default function Page() {
  const hero = getMainPage("/heros/customer-service-hero.mdx");
  const brand = getMainPage("/brands/brand1.mdx");
  const feature = getMainPage("/features/customer-service-feature.mdx");
  const service = getMainPage("/services/seo/_index.mdx");
  const services = getAllPages("/services/seo");
  const counter = getMainPage("/counters/customer-service-counter.mdx");
  const feature2 = getMainPage("/features/startup-feature2.mdx");
  const testimonial = getMainPage("/testimonials/customer-service-testimonial.mdx");
  const rating = getMainPage("/ratings/customer-service-rating.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");
  const pricing = getMainPage("/pricings/video-editor-pricing.mdx");
  const cta = getMainPage("/ctas/cta7.mdx");
  const integration = getMainPage("/integrations/customer-service-integration.mdx");
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");

  return (
    <main>
      <SEO 
        path="/"
        title="Fledger | Online Accounting Software for UK Small Businesses"
        description="Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools."
        isProduct={true}
      />
      <CustomerServiceHero hero={hero} />
      <StartupFeature2 feature={feature2} />
      <SEOService service={service} services={services} />
      <VideoEditorPricing pricing={pricing} />
      <StartupFAQ faq={faq} />
      <CTA7 cta={cta} />
    </main>
  );
}
