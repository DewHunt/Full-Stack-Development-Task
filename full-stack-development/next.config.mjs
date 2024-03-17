/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    API: "http://localhost/full-stack-development-api/api/",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
