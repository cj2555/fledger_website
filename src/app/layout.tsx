import { AppContextProvider } from "@/context/app.context";
import { CookieContextProvider } from "@/context/cookie.context";
import { LocationContextProvider } from "@/context/location.context";
import CookieConsent from "@/components/ui/CookieConsent";
import { Metadata, Viewport } from 'next';
import navigation from "@/config/navigation.json";
import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import Header5 from "@/components/elements/header/header5";
import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ScrollTop from "@/components/tools/scroll-top";
import Notification1 from "@/components/elements/notification/notification1";

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
  title: {
    template: '%s | Fledger',
    default: 'Fledger | Online Accounting Software for UK Small Businesses',
  },
  description: 'Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools.',
  openGraph: {
    title: 'Fledger | Online Accounting Software for UK Small Businesses',
    description: 'Fledger simplifies accounting for UK small businesses & freelancers with cloud-based invoicing, VAT, payroll & bank feeds. Get started with easy, smart tools.',
    url: 'https://www.fledger.co.uk',
    siteName: 'Fledger',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.fledger.co.uk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const notification = getMainPage("/notifications/notification1.mdx");

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} dir="ltr">
        <CookieContextProvider>
          <AppContextProvider>
            <LocationContextProvider>
              <div className="has-smooth" id="has_smooth"></div>
              <div className="pt-serif-regular root-layout" theme-setting="style-5">
                <ScrollSmootherComponent />
                <ScrollTop />
                <Header5
                  headerNav={navigation.header}
                  signUpBtnClassName="bg-btn-bg-hover hover:bg-btn-bg-main"
                >
                  <Notification1 notification={notification} />
                </Header5>
                <div id="smooth-wrapper">
                  <div id="smooth-content">
                    <div className="max-w-[1920px] overflow-hidden mx-auto">
                      {children}
                    </div>
                    <Footer2 />
                  </div>
                </div>
              </div>
              <CookieConsent />
            </LocationContextProvider>
          </AppContextProvider>
        </CookieContextProvider>
      </body>
    </html>
  );
}
