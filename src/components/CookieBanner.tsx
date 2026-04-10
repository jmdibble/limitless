"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-secondary bg-neutral/95 backdrop-blur-sm px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-tertiary text-center sm:text-left">
          This website uses essential cookies to ensure it functions properly. No
          tracking or advertising cookies are used.
        </p>
        <button
          onClick={accept}
          className="font-heading uppercase tracking-wider text-sm bg-primary hover:bg-primary-dark text-white px-6 py-2 transition-colors shrink-0 cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
