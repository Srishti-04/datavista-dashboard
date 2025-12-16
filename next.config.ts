import type { NextConfig } from "next";
import { SERVER_PROPS_GET_INIT_PROPS_CONFLICT } from "next/dist/lib/constants";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname:"images.pexels.com",

  }]
  }
};

export default nextConfig;
