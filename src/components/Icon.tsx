const paths = {
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  whatsapp: <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  snowflake: <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9M9.5 4.5 12 7l2.5-2.5M9.5 19.5 12 17l2.5 2.5" />,
  locker: <><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M12 3v18M9 11v2M15 11v2" /></>,
  bell: <path d="M4 18h16M6 18a6 6 0 0 1 12 0M12 8V6M10 6h4" />,
  stairs: <path d="M3 20h4v-4h4v-4h4V8h6" />,
  "arrow-right": <path d="M5 12h14m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  facebook: <path d="M14.5 21v-8h3l.5-3.5h-3.5V7.8c0-1 .4-1.8 1.9-1.8H18V3.1A20 20 0 0 0 15.4 3C12.9 3 11 4.5 11 7.3v2.2H8V13h3v8" />,
};

export type IconName = keyof typeof paths;

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
