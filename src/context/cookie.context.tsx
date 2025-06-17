"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { setCookie, getCookie } from "@/lib/cookies";

type CookieConsentType = {
  necessary: boolean;
  functional: boolean;
  performance: boolean;
  personalized: boolean;
};

const defaultConsent: CookieConsentType = {
  necessary: true, // Always true as these are necessary
  functional: false,
  performance: false,
  personalized: false,
};

type CookieContextType = {
  cookieConsent: CookieConsentType;
  showBanner: boolean;
  hasConsented: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  configureConsent: (consent: CookieConsentType) => void;
  hideBanner: () => void;
};

const CookieContext = createContext<CookieContextType>({
  cookieConsent: defaultConsent,
  showBanner: false,
  hasConsented: false,
  acceptAll: () => {},
  rejectAll: () => {},
  configureConsent: () => {},
  hideBanner: () => {},
});

export const CookieContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cookieConsent, setCookieConsent] = useState<CookieConsentType>(defaultConsent);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [hasConsented, setHasConsented] = useState<boolean>(false);

  // Load consent from cookies on client-side
  useEffect(() => {
    // Check if we're on client side
    if (typeof window === "undefined") return;
    
    try {
      const consentCookie = getCookie("cookieConsent");
      const consentGiven = getCookie("hasConsented");
      
      if (consentCookie) {
        setCookieConsent(JSON.parse(consentCookie));
      }
      
      if (consentGiven === "true") {
        setHasConsented(true);
      } else {
        setShowBanner(true);
      }
    } catch (e) {
      // If there's an error parsing, show the banner
      setShowBanner(true);
    }
  }, []);

  // Save cookie consent to cookies
  const saveConsent = useCallback((consent: CookieConsentType, consented: boolean) => {
    setCookie("cookieConsent", JSON.stringify(consent), 365);
    setCookie("hasConsented", String(consented), 365);
    setCookieConsent(consent);
    setHasConsented(consented);
    setShowBanner(false);
    
    // Apply analytics and tracking based on consent
    applyConsentSettings(consent);
  }, []);

  // Apply the consent settings to the website
  const applyConsentSettings = (consent: CookieConsentType) => {
    // Here you would conditionally load scripts based on consent
    // For example, only load analytics if performance cookies are accepted
    
    if (consent.performance) {
      // Load analytics scripts
      console.log("Analytics enabled");
    }
    
    if (consent.personalized) {
      // Load personalization scripts
      console.log("Personalization enabled");
    }
    
    if (consent.functional) {
      // Load functional scripts
      console.log("Functional cookies enabled");
    }
  };

  const acceptAll = useCallback(() => {
    const allConsent: CookieConsentType = {
      necessary: true,
      functional: true,
      performance: true,
      personalized: true,
    };
    saveConsent(allConsent, true);
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    const minimalConsent: CookieConsentType = {
      necessary: true,
      functional: false,
      performance: false,
      personalized: false,
    };
    saveConsent(minimalConsent, true);
  }, [saveConsent]);

  const configureConsent = useCallback((consent: CookieConsentType) => {
    saveConsent({...consent, necessary: true}, true);
  }, [saveConsent]);

  const hideBanner = useCallback(() => {
    setShowBanner(false);
  }, []);

  return (
    <CookieContext.Provider
      value={{
        cookieConsent,
        showBanner,
        hasConsented,
        acceptAll,
        rejectAll,
        configureConsent,
        hideBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieContext); 