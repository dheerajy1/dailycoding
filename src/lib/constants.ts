import path from "path";

export const ALLOWED_ORIGINS = {
  fixed: [
    "http://localhost:3000",
    // Add any other exact origins here (e.g., your production domain later)
  ],
  wildcards: [
    ".trycloudflare.com",
    ".devtunnels.ms",
    ".vercel.app",
    ".dheerajy1dev.dpdns.org",
  ],
};

export const runtimeTag = process.env.VERCEL_ENV
  ? `vercel-${process.env.VERCEL_ENV}`
  : "local-node";

// Server environmnet
export const isProd = process.env.NODE_ENV === "production";

// Static assets folder path
export const publicPath = isProd
  ? path.join(process.cwd(), "public")
  : path.join(process.cwd(), "public");
