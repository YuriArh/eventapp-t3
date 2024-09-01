import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["argon2"],
};

export default withNextIntl(nextConfig);
