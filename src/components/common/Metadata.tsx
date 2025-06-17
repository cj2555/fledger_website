import { Metadata } from 'next'

interface PageMetadata {
  title: string;
  description: string;
  path: string;
}

const defaultMetadata: PageMetadata = {
  title: "Fledger | Online Accounting Software for UK Small Businesses",
  description: "Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools.",
  path: "/home"
}

const metadataMap: Record<string, PageMetadata> = {
  "/home": {
    title: "Fledger | Online Accounting Software for UK Small Businesses",
    description: "Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools.",
    path: "/home"
  },
  "/features": {
    title: "Fledger Features | Cloud Accounting Tools for Small Businesses",
    description: "Discover Fledger's powerful features—bank feeds, invoicing, VAT, payroll, inventory & more. Designed to simplify accounting for UK small businesses and freelancers.",
    path: "/features"
  },
  "/pricing": {
    title: "Fledger Pricing | Accounting Software Pricing Plan UK",
    description: "Fledger's affordable monthly and annual plans designed to simplify accounting for freelancers, entrepreneurs, and small businesses. Get started today!",
    path: "/pricing"
  },
  "/contact": {
    title: "Contact Fledger | Support & Sales for Accounting Software",
    description: "Have questions? Get in touch with Fledger's friendly support team for help with UK small business accounting and software inquiries.",
    path: "/contact"
  },
  "/about": {
    title: "Meet the Team | Fledger UK",
    description: "Fledger provides easy-to-use accounting software designed for UK sole traders. Manage your finances efficiently and focus on growing your business.",
    path: "/about"
  },
  "/faq": {
    title: "Fledger Support FAQ | Help with Accounting & Invoicing",
    description: "Find answers to common questions about Fledger's UK accounting software, features, pricing, VAT support, and more.",
    path: "/faq"
  },
  "/privacy": {
    title: "Fledger Privacy Policy | Your Data Security Matters",
    description: "Read how Fledger protects your privacy and data while delivering secure, reliable cloud accounting software for UK businesses.",
    path: "/privacy"
  }
};

export function generateMetadata(path: string): Metadata {
  const pageMetadata = metadataMap[path] || defaultMetadata;
  
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    metadataBase: new URL('https://www.fledger.co.uk'),
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      url: `https://www.fledger.co.uk${pageMetadata.path}`,
      siteName: 'Fledger',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title,
      description: pageMetadata.description,
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
    verification: {
      google: 'your-google-verification-code', // You'll need to add your actual Google verification code
    },
    alternates: {
      canonical: `https://www.fledger.co.uk${pageMetadata.path}`,
    },
  };
}

export function generateBlogMetadata(title: string, description: string, slug: string): Metadata {
  return {
    title,
    description,
    metadataBase: new URL('https://www.fledger.co.uk'),
    openGraph: {
      title,
      description,
      url: `https://www.fledger.co.uk/blog/${slug}`,
      siteName: 'Fledger',
      locale: 'en_GB',
      type: 'article',
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
      canonical: `https://www.fledger.co.uk/blog/${slug}`,
    },
  };
} 