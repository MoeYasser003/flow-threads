/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {}, // ServerActions should be an object, not just a boolean
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
      ],
    },
  };
  
  export default nextConfig;
  