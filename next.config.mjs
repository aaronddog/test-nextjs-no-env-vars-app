import { datadogWebpackPlugin } from '@datadog/webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable sourcemap generation for production builds
  productionBrowserSourceMaps: true,
  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Add Datadog webpack plugin
    config.plugins.push(
      datadogWebpackPlugin({
        // Configuration options for Datadog plugin
        // Add your specific configuration here
        auth: {
            apiKey: process.env.DD_API_KEY,
          },
          errorTracking: {
            sourcemaps: {
              minifiedPathPrefix: '/',
              releaseVersion: '1.0.0',
              service: 'my-service',
              projectPath: '.',
            },
          }
        })
      );
    
    // Example: Add a custom loader
    // config.module.rules.push({
    //   test: /\.custom$/,
    //   use: 'custom-loader',
    // });
    
    // Example: Add other plugins
    // config.plugins.push(new webpack.DefinePlugin({
    //   'process.env.CUSTOM_KEY': JSON.stringify(process.env.CUSTOM_KEY),
    // }));
    
    // Example: Modify resolve aliases
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '@': path.resolve(__dirname, './'),
    // };
    
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
