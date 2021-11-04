import { useFetchQuery } from '../utils/queryUtils'
import { DdragonImageType } from './image'
import { ddragonUrl } from './constants'

interface ItemDefinition {
  name: string
  image: DdragonImageType
}

interface ItemDefinitions {
  data: Record<number, ItemDefinition>
}

export const useItemDefinitions = () =>
  useFetchQuery<ItemDefinitions>(`${ddragonUrl}/data/en_US/item.json`)

export const useItemDefinition = (id: number) => {
  const { data: itemDefinitions } = useItemDefinitions()

  return itemDefinitions?.data[id]
}
