import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

// Components
import BlogDetails from "@/components/elements/blog/blog-details";
import MDXContent from "@/components/tools/mdx-content";
import { SEO } from "@/components/common/SEO";
import CTA7 from "@/components/elements/cta/cta7";

type Props = {
  params: {
    title: string;
  };
};

// Generate static params for all blog posts at build time
export const generateStaticParams = () => {
  const blogs = getAllPages("/blogs/main");
  return blogs.map((blog) => ({
    title: blog.slug,
  }));
};

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogs = getAllPages("/blogs/main");
  const blog = blogs.find((item) => item.slug === params.title);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Fledger",
      description: "The requested blog post could not be found.",
    };
  }

  const { meta_title, meta_description } = blog.data.meta || {};
  const title = meta_title || blog.data.title || "Fledger Blog Post";
  const description = meta_description || "Read insights and tips about business finance, accounting, and growth strategies on the Fledger blog.";

  return {
    title,
    description,
    metadataBase: new URL('https://www.fledger.co.uk'),
    openGraph: {
      title,
      description,
      url: `https://www.fledger.co.uk/blog/${params.title}`,
      siteName: "Fledger",
      locale: "en_GB",
      type: "article",
      publishedTime: blog.data.date,
      authors: ["Fledger Team"],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
      canonical: `https://www.fledger.co.uk/blog/${params.title}`,
    },
  };
}

export default function Page({ params }: Props) {
  const blogs = getAllPages("/blogs/main");

  if (!(blogs && blogs.length)) {
    notFound();
  }

  const blog = blogs.find((item) => item.slug === params.title);
  if (!blog) {
    notFound();
  }

  const cta = getMainPage("/ctas/cta7.mdx");
  return (
    <main className="mt-[100px] mx-auto">
      <SEO 
        path={`/blog/${params.title}`}
        title={blog.data.title}
        description={blog.data.meta?.meta_description || "Read insights and tips about business finance, accounting, and growth strategies on the Fledger blog."}
        type="article"
      />
      <BlogDetails blog={blog}>
        <div className="blog_details">
          <MDXContent content={blog.content} />
        </div>
      </BlogDetails>
      <CTA7 cta={cta} />
    </main>
  );
}
