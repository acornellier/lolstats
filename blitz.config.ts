import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from 'blitz'

const config: BlitzConfig = {
  images: {
    domains: ['ddragon.leagueoflegends.com'],
  },
}

module.exports = config
