import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/": [
      `./node_modules/argon2/prebuilds/${process.env.ARGON2_PREBUILDS_GLOB ?? "**"}`,
    ],
  },
};

export default withNextIntl(nextConfig);
