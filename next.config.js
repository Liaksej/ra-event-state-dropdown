/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/ra-event-state-dropdown" : "",
};

module.exports = nextConfig;
