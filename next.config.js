/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
