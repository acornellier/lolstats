import { IdPicksWins } from '../utils/statUtils'
import { ItemStats } from './ItemStats'

interface Props {
  items: IdPicksWins[]
  totalPicks: number
}

export const ItemRow = ({ items, totalPicks }: Props) => {
  return (
    <div className="flex flex-row gap-2 overflow-scroll border-2 border-coolGray-600 p-2 bg-blueGray-700">
      {items.map((item) => (
        <ItemStats key={item.id} item={item} totalPicks={totalPicks} />
      ))}
    </div>
  )
}
