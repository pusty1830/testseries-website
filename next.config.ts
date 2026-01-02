/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // necessary for static export
  images: {
    domains: [
      "images.unsplash.com",
      "your-other-domain.com",
      "static.pw.live",
      "upload.wikimedia.org",
      "wpvip.edutopia.org"
    ],
  },
};

module.exports = nextConfig;
