import db from 'db'
import { IdPicksWins, PicksWins } from 'app/utils/statUtils'
import { PromiseReturnType } from 'app/utils/queryUtils'

interface Options {
  championKey: number
}

export type RawStats = PromiseReturnType<typeof getChampionRawStats>

export default async function getChampionRawStats({ championKey }: Options) {
  const [totalPicks, champion, mythics] = await Promise.all([
    db.participant.count(),
    db.$queryRaw<PicksWins[]>`
      select
        count(*) as picks,
        count(*) filter (where win) as wins
      from "Participant"
      where "championKey"=${championKey}
    `,
    db.$queryRaw<IdPicksWins[]>`
      select
        mythic as id,
        count(*) as picks,
        count(*) filter (where win) as wins
      from "Participant"
      where "championKey"=${championKey}
      group by mythic
      order by picks desc
    `,
  ])

  return {
    champion: champion[0]!,
    mythics,
    totalPicks,
  }
}
