import db, { Position } from './index'
import { randomItem } from 'utils/utils'
import { championDefinitions } from 'app/ddragon/champions'

const randomInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min))

const championKeys = Object.values(championDefinitions).map(({ key }) =>
  Number(key),
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
        items: [...Array(6)].map(() => randomInt(3000, 3100)),
        matchId: match.id,
        mythic: randomInt(3000, 3030),
        participantId: idx,
        position: randomItem(Object.values(Position)),
        primaryRunes: [...Array(4)].map(() => randomInt(8000, 8060)),
        secondaryRunes: [...Array(2)].map(() => randomInt(8000, 8060)),
        spells: [...Array(2)].map(() => randomInt(0, 8)),
        startingItems: [...Array(randomInt(1, 3))].map(() =>
          randomInt(1000, 1015),
        ),
        statRunes: [...Array(3)].map(() => randomInt(5001, 5006)),
        win: Math.random() > 0.5,
      })),
    })
  }
}

export default seed
