import db, { Position } from './index'
import { randomItem } from 'utils/utils'
import { championDefinitions } from 'app/ddragon/champions'
import itemDefinitions from 'public/riot_static/11.21.1/data/en_US/item.json'

const randomInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min))

const championKeys = Object.values(championDefinitions).map(({ key }) =>
  Number(key),
)

const startingItems = Object.entries(itemDefinitions.data)
  .filter(([_, item]) => item.gold.purchasable && item.gold.total <= 500)
  .map(([id, item]) => Number(id))

const [legendaries, mythics] = Object.entries(itemDefinitions.data)
  .filter(([_, item]) => (item as any).depth === 3)
  .reduce<[number[], number[]]>(
    (acc, [id, item]) => {
      acc[item.description.includes('Mythic Passive:') ? 1 : 0].push(Number(id))

      return acc
    },
    [[], []],
  )

const seed = async () => {
  await db.match.createMany({
    data: [...Array(10_000)].map((_, idx) => ({ id: idx })),
  })

  const matches = await db.match.findMany()

  for (const match of matches) {
    await db.participant.createMany({
      data: [...Array(10)].map((_, idx) => ({
        championKey: randomItem(championKeys),
        items: [...Array(6)].map(() => randomItem(legendaries)),
        matchId: match.id,
        mythic: randomItem(mythics),
        participantId: idx,
        position: randomItem(Object.values(Position)),
        primaryRunes: [...Array(4)].map(() => randomInt(8000, 8060)),
        secondaryRunes: [...Array(2)].map(() => randomInt(8000, 8060)),
        spells: [...Array(2)].map(() => randomInt(0, 8)),
        startingItems: [...Array(randomInt(1, 3))].map(() =>
          randomItem(startingItems),
        ),
        statRunes: [...Array(3)].map(() => randomInt(5001, 5006)),
        win: Math.random() > 0.5,
      })),
    })
  }
}

export default seed
