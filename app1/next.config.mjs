import {NextFederationPlugin} from "@module-federation/nextjs-mf"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        remotes: {
          app2: `app2@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './footer': './src/components/Footer.js',
          './nav': './src/components/Nav.js'
        },
      })
    );
    return config;
  }
};

export default nextConfig;
