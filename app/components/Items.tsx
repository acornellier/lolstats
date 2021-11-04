import { IdPicksWins } from '../utils/statUtils'
import { Item } from './Item'

interface Props {
  items: IdPicksWins[]
  totalPicks: number
}

export const Items = ({ items, totalPicks }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      {items.map((item) => (
        <Item key={item.id} item={item} totalPicks={totalPicks} />
      ))}
    </div>
  )
}
