import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    dangerouslyAllowSVG:true,
    
    remotePatterns:[
      {
        protocol:'http',
        hostname:'*',
      }
    ]
  }
};

export default nextConfig;
