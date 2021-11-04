import { BlitzPage, useParam } from 'blitz'
import { getChampionName } from 'twisted/dist/constants'
import { championDefinitions, ChampionId } from '../../ddragon/champions'
import { picksWinsToPercentage, statToPercentage } from '../../utils/statUtils'
import { Items } from '../../components/Items'
import getChampionRawStats from 'app/queries/getChampionRawStats'
import { useMyQuery } from 'app/utils/queryUtils'
import { SpriteImage } from 'app/components/ItemImage'

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
      <SpriteImage image={championDefinition.image} />
      <span>picks: {rawStats.champion.picks}</span>
      <span>
        pickrate:{' '}
        {statToPercentage(rawStats.champion.picks, rawStats.totalPicks)}%
      </span>
      <span>winrate: {picksWinsToPercentage(rawStats.champion)}%</span>
      <Items items={rawStats.mythics} totalPicks={rawStats.champion.picks} />
    </div>
  )
}

export default ChampionPage
