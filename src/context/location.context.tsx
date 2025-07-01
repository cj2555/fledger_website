"use client";

import { createContext, useContext, useEffect, useState } from "react";

type LocationContextType = {
  country: string;
  setCountry: (country: string) => void;
  isLoading: boolean;
};

const LocationContext = createContext<LocationContextType>({
  country: "global", // default value
  setCountry: () => {},
  isLoading: true,
});

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [country, setCountry] = useState<string>("global");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to detect country from domain
    const detectCountryFromDomain = () => {
      const domain = window.location.hostname;
      const tld = domain.split(".").pop()?.toLowerCase();
      
      // Map TLD to country code
      switch (tld) {
        case "uk":
          return "GB";
        case "za":
          return "ZA";
        // Add more country mappings as needed
        default:
          return "global";
      }
    };

    // Set the country based on domain
    if (typeof window !== "undefined") {
      const detectedCountry = detectCountryFromDomain();
      setCountry(detectedCountry);
      setIsLoading(false);
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{
        country,
        setCountry,
        isLoading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationContextProvider");
  }
  return context;
}; 