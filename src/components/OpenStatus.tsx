"use client";

import { useSyncExternalStore } from "react";
import { DAY_NAMES, HOURS } from "@/lib/site";

const londonTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  weekday: "long",
  hour: "numeric",
  hourCycle: "h23",
});

function getIsOpen() {
  const parts = londonTime.formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  const day = DAY_NAMES.findIndex((name) => name === weekday);
  const today = HOURS.find((h) => h.days.includes(day));
  return !!today && hour >= today.open && hour < today.close;
}

// Re-evaluate every minute. The snapshot is a boolean, so React only re-renders on change.
function subscribe(onChange: () => void) {
  const interval = setInterval(onChange, 60_000);
  return () => clearInterval(interval);
}

export default function OpenStatus() {
  // Server snapshot is null so the static HTML renders nothing, avoiding a hydration mismatch.
  const isOpen = useSyncExternalStore(subscribe, getIsOpen, () => null);

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
