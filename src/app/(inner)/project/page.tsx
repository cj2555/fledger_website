import { getMainPage } from "@/lib/helper/contentConverter";
import { Metadata } from 'next';

// Components
import AllProject from "@/components/elements/project/all-project";

export async function generateMetadata(): Promise<Metadata> {
  const project = getMainPage("/projects/booking-project.mdx");
  const { meta_title, meta_description } = project.data.meta || {};
  
  const title = meta_title || project.data.title || "Project page";
  const description = meta_description || "Project page description";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://www.fledger.co.uk/project",
      siteName: "Fledger",
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: "https://www.fledger.co.uk/project",
    },
  };
}

export default function Page() {
  const project = getMainPage("/projects/booking-project.mdx");
  return (
    <main>
      <AllProject project={project} />
    </main>
  );
}
