"use client";

import { useState } from "react";
import Image from "next/image";
import { useCookieConsent } from "@/context/cookie.context";

// Initial cookie banner component (like the one shown in the image)
export const CookieBanner = ({ onConfigureClick }: { onConfigureClick: () => void }) => {
  const { showBanner, acceptAll } = useCookieConsent();
  
  if (!showBanner) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md p-4 sm:p-6 md:p-8 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 relative">
              <Image src="/images/cookie.svg" alt="Cookie Icon" width={80} height={80} />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-2">Fledger Uses Cookies</h2>
            <p className="text-gray-600">
              We use cookies to personalize our website and offering to your
              interests and for measurement and analytics purposes. By using
              our website and our products, you agree to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onConfigureClick}
            className="px-5 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50 transition-colors"
          >
            Configure cookies
          </button>
          <button
            onClick={() => acceptAll()}
            className="px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

// Detailed cookie settings component (shown when "Configure cookies" is clicked)
export const CookieSettings = ({ onClose }: { onClose: () => void }) => {
  const { cookieConsent, configureConsent, acceptAll, rejectAll } = useCookieConsent();
  const [consent, setConsent] = useState({...cookieConsent});
  
  const handleToggle = (type: keyof typeof consent) => {
    if (type === 'necessary') return; // Can't toggle necessary cookies
    setConsent({...consent, [type]: !consent[type]});
  };
  
  const handleSubmit = () => {
    configureConsent(consent);
    onClose();
  };
  
  const handleAcceptAll = () => {
    acceptAll();
    onClose();
  };
  
  const handleRejectAll = () => {
    rejectAll();
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Cookie settings</h2>
          <p className="text-gray-600 mt-2">
            We use cookies, some of them are essential, others are optional.
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold">Strictly Necessary</h3>
              <p className="text-sm text-gray-600 mt-1">
                These cookies are necessary for the website and can&apos;t be deactivated.
              </p>
            </div>
            <div className="text-teal-600">Always active</div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold">Functional Cookies</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={consent.functional}
                  onChange={() => handleToggle('functional')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&apos;&apos;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold">Performance Cookies</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={consent.performance}
                  onChange={() => handleToggle('performance')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&apos;&apos;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold">Personalized ads and content measurement, audience insights and product development</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={consent.personalized}
                  onChange={() => handleToggle('personalized')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&apos;&apos;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={handleRejectAll}
            className="px-5 py-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors"
          >
            Reject all
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50 transition-colors"
          >
            Accept all
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
          >
            Submit my cookies
          </button>
        </div>
      </div>
    </div>
  );
};

// Main component that handles both banner and settings
export const CookieConsent = () => {
  const { showBanner } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  
  // Show cookie settings when "Configure cookies" is clicked
  const handleConfigureClick = () => {
    setShowSettings(true);
  };
  
  const handleCloseSettings = () => {
    setShowSettings(false);
  };
  
  return (
    <>
      {showBanner && <CookieBanner onConfigureClick={handleConfigureClick} />}
      {showSettings && <CookieSettings onClose={handleCloseSettings} />}
    </>
  );
};

export default CookieConsent; 