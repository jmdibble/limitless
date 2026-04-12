import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Limitless Gym MK",
    short_name: "Limitless Gym MK",
    description:
      "Weights and bodybuilding gym near Milton Keynes. Everyone is welcome. Whether you're a seasoned lifter or just starting out, our gym provides a supportive and motivating environment to help you achieve your fitness goals.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#D32F2F",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
