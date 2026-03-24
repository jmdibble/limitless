import Image from "next/image";

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

        <p className="text-tertiary text-sm">
          &copy; {new Date().getFullYear()} Limitless Gym MK. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
