/**
 * Next.js configuration file.
 *
 * We enable the experimental app directory and static export so the site
 * generates a fully static bundle. The output directory is "out" which
 * Cloudflare Pages expects by default when deploying static sites.
 */
const nextConfig = {
  experimental: {
    appDir: true
  },
  output: 'export',
  images: {
    // Allow serving our generated backgrounds from the public folder
    unoptimized: true
  }
};

module.exports = nextConfig;