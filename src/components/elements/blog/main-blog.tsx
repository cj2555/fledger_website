"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// types
import { SingleBlogType } from "@/types";

// components
import TitleSection1 from "@/components/shared/title-section/title-section1";
import BlogItems from "./blog-items";
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  blog: {
    data: {
      title: string;
      details: string;
    };
  };

  blogs: SingleBlogType[];
};

const MainBlog = ({ blog, blogs }: Props) => {
  const { title, details } = blog.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px] sec_space_bottom1">
      <div className="container" ref={containerRef}>
      <TitleSection2
          title="Latest blog & articles"
          sub_title="Blog"
          details="Online accounting software to help you take control of your finances. Invest in services that drives your business. Clear, straightforward plans tailored to your needs."
          titleClassName="max-w-[750px]"
          detailsClassName="max-w-[720px] py-[100px]"
        />
      </div>
      <BlogItems blogs={blogs} />
    </section>
  );
};

export default MainBlog;
