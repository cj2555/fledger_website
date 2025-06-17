import { AppContextProvider } from "@/context/app.context";
import { CookieContextProvider } from "@/context/cookie.context";
import CookieConsent from "@/components/ui/CookieConsent";
import { Metadata, Viewport } from 'next';

// styles
import "@/style/globals.css";
import "@/style/main.scss";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fledger.co.uk'),
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} dir="ltr">
        <CookieContextProvider>
          <AppContextProvider>
            <div className="has-smooth" id="has_smooth"></div>
            {children}
            <CookieConsent />
          </AppContextProvider>
        </CookieContextProvider>
      </body>
    </html>
  );
}
