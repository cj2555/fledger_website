import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import MainBlog from "@/components/elements/blog/main-blog";
import CTA7 from "@/components/elements/cta/cta7";

export default function Page() {
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");
  const cta = getMainPage("/ctas/cta7.mdx");
  const { meta_title, meta_description } = blog.data.meta || {};

  return (
    <main>
      <SeoData
        title={blog.data.title || "Blog page"}
        meta_title={meta_title || "Blog page"}
        description={meta_description || "Blog page description"}
      />
      <div className="container mt-[100px]">
        <MainBlog blog={blog} blogs={blogs} />
      </div>

      <div className='my-[70px]'>
            <CTA7 cta={cta} />
           </div>
    </main>
  );
}
