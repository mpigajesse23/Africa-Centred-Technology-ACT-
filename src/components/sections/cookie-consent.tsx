"use client";

import React, { useState, useEffect } from "react";

/**
 * CookieConsent Component
 * 
 * Cloned with pixel-perfect accuracy according to the design instructions.
 * Features:
 * - Fixed bottom position with high z-index
 * - Clean white background (#FFFFFF)
 * - "Accept Cookies" button in deep African green (#1B3022)
 * - "Manage preferences" button in subtle earth-tone outline (#E5E1D8)
 * - Responsive layout following the original HTML structure
 */
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookie-consent-given");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-given", "true");
    setIsVisible(false);
  };

  const handleManage = (e: React.MouseEvent) => {
    e.preventDefault();
    // Implementation for manage preferences would go here
    console.log("Manage preferences clicked");
  };

  if (!isVisible) return null;

  return (
    <div
      id="CybotCookiebotDialog"
      role="dialog"
      aria-modal="true"
      className="fixed bottom-0 left-0 right-0 z-[2147483631] flex w-full flex-col bg-white px-[15px] pt-[15px] pb-[7.5px] transition-transform duration-300 ease-in-out sm:flex-row sm:items-center sm:justify-center md:h-[113.25px]"
      style={{
        boxShadow: "0px 30px 70px 0px rgba(0, 0, 0, 0.3)",
        fontFamily: "sans-serif", // Matching computed styles exactly
      }}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-4 md:flex-row md:px-[145px]">
        {/* Content Section */}
        <div id="CybotCookiebotDialogBodyContent" className="flex flex-col text-left">
          <div
            id="CybotCookiebotDialogBodyContentTitle"
            className="mb-1 text-[18px] font-bold text-[#2C2C2C]"
            role="heading"
            aria-level={2}
          >
            Your privacy matters
          </div>
          <div 
            id="CybotCookiebotDialogBodyContentText" 
            className="text-[14px] leading-[22px] text-[#707070]"
          >
            <p>
              We use cookies to enhance your experience, analyse traffic, and serve personalised content. 
              ‘Accept Cookies’ to consent per our{" "}
              <a 
                href="https://www.envato.com/cookies/" 
                className="text-[#1B3022] underline hover:no-underline"
              >
                Cookie
              </a>{" "}
              and{" "}
              <a 
                href="https://www.envato.com/privacy/" 
                className="text-[#1B3022] underline hover:no-underline"
              >
                Privacy
              </a>{" "}
              policies.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <button
            onClick={handleAccept}
            className="h-[45px] min-w-[180px] bg-[#1B3022] px-6 text-[14px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#26422F]"
            style={{ borderRadius: "0px" }}
          >
            Accept Cookies
          </button>
          
          <div id="CybotCookiebotDialogBodyEdgeMoreDetails">
            <button
              onClick={handleManage}
              className="h-[45px] min-w-[180px] border border-[#E5E1D8] bg-transparent px-6 text-[14px] font-bold uppercase tracking-wider text-[#2C2C2C] transition-colors hover:bg-[#F1EDE4]"
              style={{ borderRadius: "0px" }}
            >
              Manage preferences
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Tab Strip - Replicating original navigation logic visuals if needed */}
      <div className="hidden">
        <ul id="CybotCookiebotDialogNavList" role="tablist">
          <li role="presentation"><a id="CybotCookiebotDialogNavDeclaration" href="#" role="tab">Consent</a></li>
          <li role="presentation"><a id="CybotCookiebotDialogNavDetails" href="#" role="tab">Details</a></li>
          <li role="presentation"><a id="CybotCookiebotDialogNavAbout" href="#" role="tab">About</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CookieConsent;