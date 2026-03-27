import Image from "next/image";
import ParallaxLayer from "./ParallaxLayer";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center scroll-mt-20 overflow-hidden"
    >
      {/* Background image with parallax */}
      <ParallaxLayer className="absolute inset-0 will-change-transform">
        <Image
          src="/gym_floor.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center grayscale scale-125"
        />
      </ParallaxLayer>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-neutral via-neutral/80 to-neutral/50" />

      {/* Content */}
      <div className="relative z-10 px-4">
        <Image
          src="/logo_no_bg.png"
          alt="Limitless Gym MK Logo"
          width={400}
          height={400}
          priority
          className="w-40 md:w-52 h-auto mb-8 mx-auto opacity-90 animate-fade-in-up"
        />

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-4 animate-fade-in-up [animation-delay:200ms]">
          No Gimmicks. No Excuses.
          <span className="block text-primary">Just Iron.</span>
        </h1>

        <p className="text-tertiary text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up [animation-delay:400ms]">
          Premium weights and bodybuilding gym near Milton Keynes where everyone
          is welcome.
        </p>

        <div className="flex gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
          <a
            href="https://secure11.clubwise.com/limitlessgymmk/pos.asp?fbclid=IwY2xjawQvStpleHRuA2FlbQIxMABicmlkETFabDZCOHFnQnVmZG5QWEtXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrXrmVyoR9kbdsdZU-nX5D9MZk5gGocvBgjXapuOMeeiS3dY4fybnKD0NGAc_aem_Rv4iQ-09GBduHmakpQyusA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-heading uppercase tracking-wider px-8 py-3 text-lg transition-colors"
          >
            Join now
          </a>
          <a
            href="#about"
            className="border-2 border-tertiary hover:border-primary text-tertiary hover:text-primary font-heading uppercase tracking-wider px-8 py-3 text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
