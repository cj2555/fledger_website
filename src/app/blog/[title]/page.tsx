import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { notFound } from "next/navigation";

// Components
import BlogDetails from "@/components/elements/blog/blog-details";
import MDXContent from "@/components/tools/mdx-content";
import SeoData from "@/components/tools/seo-data";
import CTA7 from "@/components/elements/cta/cta7";



type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/blogs/main");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

export default function Page({ params }: Props) {
  const blogs = getAllPages("/blogs/main");

  if (!(blogs && blogs.length)) {
    notFound();
  }
  const blog = blogs.find((item) => item.slug === params.title);

  if (!(blog && blog.data)) {
    notFound();
  }

  const { meta_title, meta_description } = blog.data.meta || {};
  const cta = getMainPage("/ctas/cta7.mdx");
  return (
    <main className="mt-[100px] mx-auto">
      <SeoData
        title={blog.data.title || "Integration page"}
        meta_title={meta_title || "Integration page"}
        description={meta_description || "Integration page description"}
      />
      <BlogDetails blog={blog}>
        <div className="blog_details">
          <MDXContent content={blog.content} />
        </div>
      </BlogDetails>

      <div className='my-[70px]'>
            <CTA7 cta={cta} />
           </div> 
    </main>
  );
}
