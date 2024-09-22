/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
          },
        ],
      },
};

export default nextConfig;
