import db, { Position } from 'db'
import { IdPicksWins } from 'app/utils/statUtils'
import { PromiseReturnType } from 'app/utils/queryUtils'

interface Options {
  championKey: number
  position?: Position
}

export type RawStats = PromiseReturnType<typeof getChampionRawStats>

export default async function getChampionRawStats({
  championKey,
  position,
}: Options) {
  const where = {
    championKey,
    ...(position ? { position } : {}),
  }

  const [totalPicks, championPicks, championWins, mythicPicks, mythicWins] =
    await Promise.all([
      db.participant.count(),
      db.participant.count({
        where: {
          ...where,
        },
      }),
      db.participant.count({
        where: {
          ...where,
          win: true,
        },
      }),
      db.participant.groupBy({
        _count: true,
        by: ['mythic'],
        where: {
          ...where,
        },
      }),
      db.participant.groupBy({
        _count: true,
        by: ['mythic'],
        where: {
          ...where,
          win: true,
        },
      }),
    ])

  return {
    champion: { picks: championPicks, wins: championWins },
    mythics: mythicPicks
      .reduce<IdPicksWins[]>((acc, cur) => {
        const win = mythicWins.find(
          (mythicWin) => mythicWin.mythic === cur.mythic,
        )

        acc.push({ id: cur.mythic!, picks: cur._count, wins: win!._count })

        return acc
      }, [])
      .sort((a, b) => b.picks - a.picks),
    totalPicks,
  }
}
