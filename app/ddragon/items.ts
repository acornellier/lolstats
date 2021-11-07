import { useFetchQuery } from '../utils/queryUtils'
import { DdragonImageType } from './image'
import { ddragonUrl } from './constants'

export interface ItemDefinition {
  description: string
  depth?: number
  gold: { total: number }
  image: DdragonImageType
  name: string
}

export interface ItemDefinitions {
  data: Record<number, ItemDefinition>
}

export const useItemDefinitions = () =>
  useFetchQuery<ItemDefinitions>(`${ddragonUrl}/data/en_US/item.json`)

export const useItemDefinition = (id: number) => {
  const { data: itemDefinitions } = useItemDefinitions()

  return itemDefinitions?.data[id]
}
