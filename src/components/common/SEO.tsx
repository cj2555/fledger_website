import { Metadata } from 'next';
import Script from 'next/script';

interface SEOProps {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
  isProduct?: boolean;
}

const defaultImage = 'https://fledger.co.uk/assets/imgs/home/fledger_dashboard_image.svg';

export function SEO({ path, title, description, type = 'website', image = defaultImage, isProduct = false }: SEOProps) {
  const url = `https://www.fledger.co.uk${path}`;
  
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Fledger',
    'image': 'https://fledger.co.uk/assets/imgs/logo/fledgerLogo.svg',
    'description': 'Fledger is a feature-rich platform offering advanced business solutions.',
    'brand': {
      '@type': 'Brand',
      'name': 'Fledger'
    },
    'url': url,
    'offers': {
      '@type': 'Offer',
      'url': url,
      'priceCurrency': 'GBP',
      'price': '0.00',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Fledger',
        'telephone': '+44-20-3432-6423',
        'email': 'info@fledger.co.uk',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '34-35 Hatton Garden, Holborn',
          'addressLocality': 'London',
          'addressCountry': 'United Kingdom',
          'postalCode': 'EC1N 8DX'
        }
      }
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    'name': 'Fledger',
    'url': url,
    'logo': 'https://fledger.co.uk/assets/imgs/logo/fledgerLogo.svg',
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+44-20-3432-6423',
        'contactType': 'Customer Service',
        'areaServed': 'GB',
        'availableLanguage': ['English']
      }
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '34-35 Hatton Garden, Holborn',
      'addressLocality': 'London',
      'addressCountry': 'United Kingdom',
      'postalCode': 'EC1N 8DX'
    },
    'sameAs': [],
    'hasWebsite': {
      '@type': 'WebSite',
      'url': url,
      'name': 'Fledger',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://fledger.co.uk/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      
      {/* Open Graph Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Fledger" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="fledger.co.uk" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Schema.org */}
      <Script 
        id="schema-org" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(isProduct ? productSchema : websiteSchema)
        }}
      />
    </>
  );
} 