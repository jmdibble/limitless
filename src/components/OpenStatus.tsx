"use client";

import { useEffect, useState } from "react";

const HOURS: Record<number, [number, number]> = {
  0: [9, 17], // Sunday
  1: [7, 21], // Monday
  2: [7, 21],
  3: [7, 21],
  4: [7, 21],
  5: [7, 21],
  6: [9, 20], // Saturday
};

function getIsOpen() {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/London" })
  );
  const day = now.getDay();
  const hour = now.getHours();
  const [open, close] = HOURS[day];
  return hour >= open && hour < close;
}

export default function OpenStatus() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(getIsOpen());
    const interval = setInterval(() => setIsOpen(getIsOpen()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (isOpen === null) return null;

  return (
    <span className="inline-flex items-center gap-2 text-sm font-heading uppercase tracking-wider">
      <span
        className={`h-2 w-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-tertiary"}`}
      />
      {isOpen ? "Open Now" : "Closed"}
    </span>
  );
}
