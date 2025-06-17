import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

// Components
import BlogDetails from "@/components/elements/blog/blog-details";
import MDXContent from "@/components/tools/mdx-content";
import CTA7 from "@/components/elements/cta/cta7";

type Props = {
  params: {
    title: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogs = getAllPages("/blogs/main");
  const blog = blogs.find((item) => item.slug === params.title);
  
  if (!blog) {
    return {
      title: "Blog Post Not Found | Fledger",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.data.title,
    description: blog.data.meta?.meta_description || "Read insights and tips about business finance, accounting, and growth strategies on the Fledger blog.",
    openGraph: {
      title: blog.data.title,
      description: blog.data.meta?.meta_description || "Read insights and tips about business finance, accounting, and growth strategies on the Fledger blog.",
      url: `https://www.fledger.co.uk/blog/${params.title}`,
      siteName: "Fledger",
      locale: "en_GB",
      type: "article",
    },
    alternates: {
      canonical: `https://www.fledger.co.uk/blog/${params.title}`
    }
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
      <BlogDetails blog={blog}>
        <div className="blog_details">
          <MDXContent content={blog.content} />
        </div>
      </BlogDetails>
      <CTA7 cta={cta} />
    </main>
  );
}
