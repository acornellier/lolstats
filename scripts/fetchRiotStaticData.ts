import fs from 'fs'
import path from 'path'
import fetch from 'cross-fetch'

const patch = '11.21.1'
const baseUrl = `https://ddragon.leagueoflegends.com/`

const fetchPath = async (urlPath: string, alwaysFetch = false) => {
  const filePath = path.join(
    __dirname,
    `../public/riot_static/${patch}`,
    urlPath,
  )
  const fileExists = await fs.promises.stat(filePath).catch(() => false)

  if (fileExists && !alwaysFetch) return

  const url = new URL(path.join(`cdn/${patch}`, urlPath), baseUrl).toString()

  console.log(url)

  const res = await fetch(url)
  const data = await res.json()

  await fs.promises.mkdir(path.dirname(filePath), { recursive: true })
  await fs.promises.writeFile(filePath, JSON.stringify(data))

  return data
}

const run = async () => {
  await Promise.all(
    [
      '/data/en_US/item.json',
      '/data/en_US/runesReforged.json',
      '/data/en_US/summoner.json',
    ].map((path) => fetchPath(path)),
  )

  // const championIds = Object.keys(champion.data)

  // await Promise.all(
  //   championIds.map((championId) =>
  //     fetchPath(`/data/en_US/champion/${championId}.json`),
  //   ),
  // )
}

run()
