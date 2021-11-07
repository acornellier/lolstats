import { Link } from 'blitz'
import { useMemo, useState } from 'react'
import { championDefinitions } from 'app/ddragon/champions'
import { SpriteImage } from 'app/components/SpriteImage'

export function ChampionGrid() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(
    () =>
      Object.values(championDefinitions).filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  )

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} value={search} />
      <div className="flex flex-wrap">
        {filtered.map((championDefinition) => (
          <Link
            key={championDefinition.key}
            href={`/champion/${championDefinition.id.toLowerCase()}`}
          >
            <a>
              <SpriteImage image={championDefinition.image} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
