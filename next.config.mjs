/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages with a repo subfolder, set:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
  trailingSlash: true,
}

export default nextConfig
