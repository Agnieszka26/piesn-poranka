import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vumsqpbytakgvqprzfmn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/gallery-images/**",
      },
      {
        protocol: "https",
        hostname: "vumsqpbytakgvqprzfmn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/uploads/**",
      },
      {
        protocol: "https",
        hostname: "vumsqpbytakgvqprzfmn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/gallery-images/**",
      },
            {
        protocol: "https",
        hostname: "vumsqpbytakgvqprzfmn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/offers-images/**",
      },
      {
        protocol: "https",
        hostname: "vumsqpbytakgvqprzfmn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/offers-images/**"
      },
            {
        protocol: "https",
        hostname: "vumsqpbytakgvqprzfmn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/hero-images/**"
      },
    ],
  },
};

export default nextConfig;
