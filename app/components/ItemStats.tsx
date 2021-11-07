import { picksWinsToPercentage, statToPercentage } from '../utils/statUtils'
import { ItemIcon } from './ItemIcon'
import { IdPicksWins } from 'app/utils/statUtils'

interface Props {
  item: IdPicksWins
  totalPicks: number
}

export const ItemStats = ({ item, totalPicks }: Props) => {
  return (
    <div className="flex flex-col text-sm">
      <ItemIcon id={item.id} />
      <span>{statToPercentage(item.picks, totalPicks)}%</span>
      <span>{picksWinsToPercentage(item)}%</span>
      <span>{item.picks}</span>
    </div>
  )
}
