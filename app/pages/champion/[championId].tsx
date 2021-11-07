import { BlitzPage, useParam } from 'blitz'
import { championDefinitions } from 'app/ddragon/champions'
import { picksWinsToPercentage, statToPercentage } from 'app/utils/statUtils'
import { ItemRow } from 'app/components/ItemRow'
import { PositionRow } from 'app/components/PositionRow'
import getChampionRawStats from 'app/queries/getChampionRawStats'
import { useMyQuery } from 'app/utils/queryUtils'
import { SpriteImage } from 'app/components/SpriteImage'

const ChampionPage: BlitzPage = () => {
  const championId = useParam('championId', 'string')

  const championDefinition =
    championId && championDefinitions[championId.toLowerCase()]

  const [rawStats] = useMyQuery(
    getChampionRawStats,
    { championKey: Number(championDefinition?.key) },
    { enabled: !!championDefinition },
  )

  if (!championDefinition || !rawStats) return <>Loading...</>

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center gap-4 pb-2">
        <PositionRow />
        <div className="flex">
          <div className="flex flex-col">
            <span>
              pickrate:{' '}
              {statToPercentage(rawStats.champion.picks, rawStats.totalPicks)}%
            </span>
            <span>winrate: {picksWinsToPercentage(rawStats.champion)}%</span>
          </div>
          <SpriteImage image={championDefinition.image} />
        </div>
      </div>
      <ItemRow items={rawStats.mythics} totalPicks={rawStats.champion.picks} />
    </div>
  )
}

export default ChampionPage
