import createNextIntlPlugin from "next-intl/plugin";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  "./src/i18n.ts",
);

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
