import fs from 'fs'
import path from 'path'
import { LolApi } from 'twisted'
import { RegionGroups } from 'twisted/dist/constants'
import { randomItem } from '../../utils/utils'

require('dotenv-flow').config()

const api = new LolApi()

async function fetchMatchForPuuid(puuid: string) {
  const { response: matchList } = await api.MatchV5.list(
    puuid,
    RegionGroups.AMERICAS,
  )

  const { response: match } = await api.MatchV5.get(
    randomItem(matchList),
    RegionGroups.AMERICAS,
  )

  const { response: matchTimeline } = await api.MatchV5.timeline(
    match.metadata.matchId,
    RegionGroups.AMERICAS,
  )

  fs.writeFileSync(
    path.join(
      __dirname,
      'matches',
      `${match.metadata.matchId.toString()}.json`,
    ),
    JSON.stringify(match),
  )

  fs.writeFileSync(
    path.join(
      __dirname,
      'matches',
      `${match.metadata.matchId.toString()}-timeline.json`,
    ),
    JSON.stringify(matchTimeline),
  )

  // do stuff

  // fetchMatchForPuuid(randomItem(match.metadata.participants))
}

async function run() {
  fetchMatchForPuuid(
    'weRvQ9hzW_tpKW3pGndBmQ4Hv6CWF12AtEgoXIYT1FviAEYvGrnGveWVLhxgE0lRhQmRZQd5SvOacw',
  )
}

run()
