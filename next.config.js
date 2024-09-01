import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/": ["./node_modules/argon2/prebuilds/linux-x64/*.musl.*"],
  },
};

export default withNextIntl(nextConfig);
