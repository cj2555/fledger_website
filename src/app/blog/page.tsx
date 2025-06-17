import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { Metadata } from 'next';

// Components
import MainBlog from "@/components/elements/blog/main-blog";
import CTA7 from "@/components/elements/cta/cta7";

export const metadata: Metadata = {
  title: "Fledger Blog | Finance Insights for UK Startups & Small Businesses",
  description: "Explore the Fledger Blog for expert insights on business finance, accounting tips, cash flow strategies, and SME growth advice tailored for UK companies.",
  openGraph: {
    title: "Fledger Blog | Finance Insights for UK Startups & Small Businesses",
    description: "Explore the Fledger Blog for expert insights on business finance, accounting tips, cash flow strategies, and SME growth advice tailored for UK companies.",
    url: "https://www.fledger.co.uk/blog",
    siteName: "Fledger",
    locale: "en_GB",
    type: "website",
  },
};

export default function Page() {
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");
  const cta = getMainPage("/ctas/cta7.mdx");

  return (
    <main>
      <div className="container mt-[100px]">
        <MainBlog blog={blog} blogs={blogs} />
      </div>

      <div className='my-[70px]'>
        <CTA7 cta={cta} />
      </div>
    </main>
  );
}
