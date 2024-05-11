import {NextFederationPlugin} from "@module-federation/nextjs-mf"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    //config.experiments = { topLevelAwait: true, layers: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        remotes: {
          app1: `app1@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes:{
          './card': "./src/components/Card.js"
        },
        extraOptions: {
          exposePages: true
        }
      })
    );
    return config;
  }
};

export default nextConfig;
