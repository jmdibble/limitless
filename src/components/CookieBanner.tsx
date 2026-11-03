"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie-consent";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange); // other tabs
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return "accepted"; // storage blocked: don't nag on every page
  }
}

export default function CookieBanner() {
  // Server snapshot says "accepted" so nothing renders until the client has checked storage.
  const consent = useSyncExternalStore(subscribe, getSnapshot, () => "accepted");

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore: banner is dismissed below regardless
    }
    listeners.forEach((notify) => notify());
  }

  if (consent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-neutral/95 px-4 py-4 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-center text-sm text-copy-muted sm:text-left">
          This website uses essential cookies to ensure it functions properly. No
          tracking or advertising cookies are used.
        </p>
        <button type="button" onClick={accept} className="button button-primary shrink-0 cursor-pointer">
          Got it
        </button>
      </div>
    </div>
  );
}
