/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      // {
      //   test: /\.json/,
      //   type: 'asset/resource',
      // },
      {
        test: /\.mp3/,
        type: 'asset/resource',
      },
    )

    return config
  },
}

module.exports = nextConfig
