import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral border-t border-secondary py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Image
          src="/logo_no_bg.png"
          alt="Limitless Gym MK"
          width={80}
          height={80}
          className="w-16 h-16 object-contain"
        />

        <Link
          href="/privacy"
          className="font-heading uppercase tracking-wider hover:text-primary transition-colors"
        >
          Privacy Policy
        </Link>
        <div className="text-tertiary text-sm text-center flex flex-col items-center">
          <p>
            &copy; {new Date().getFullYear()} Limitless Gym MK Ltd. All rights
            reserved.
          </p>
          <p className="mt-1">
            Limitless Gym MK Ltd · Registered in England &amp; Wales · Company
            No. 16947334
          </p>
        </div>
      </div>
    </footer>
  );
}
