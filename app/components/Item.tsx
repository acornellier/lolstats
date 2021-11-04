import { picksWinsToPercentage, statToPercentage } from '../utils/statUtils'
import { SpriteImage } from './ItemImage'
import { useItemDefinition } from 'app/ddragon/items'
import { IdPicksWins } from 'app/utils/statUtils'

interface Props {
  item: IdPicksWins
  totalPicks: number
}

export const Item = ({ item, totalPicks }: Props) => {
  const itemDefinition = useItemDefinition(item.id)

  if (!itemDefinition) return null

  return (
    <div className="flex flex-col">
      <SpriteImage image={itemDefinition.image} />
      <span>{statToPercentage(item.picks, totalPicks)}%</span>
      <span>{picksWinsToPercentage(item)}%</span>
      <span>{item.picks}</span>
    </div>
  )
}
