import { ddragonUrl } from './constants'

export interface DdragonImageType {
  group: string
  full: string
  sprite: string
  x: number
  y: number
  w: number
  h: number
}

export const spriteUrl = ({ sprite }: DdragonImageType) =>
  `${ddragonUrl}/img/sprite/${sprite}`

export const fullImageUrl = ({ group, full }: DdragonImageType) =>
  `${ddragonUrl}/img/${group}/${full}`
