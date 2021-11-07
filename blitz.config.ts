import { BlitzConfig } from 'blitz'

const config: BlitzConfig = {
  images: {
    domains: ['ddragon.leagueoflegends.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = config
