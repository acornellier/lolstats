import { Link } from 'blitz'
import { championDefinitions } from 'app/ddragon/champions'
import { SpriteImage } from 'app/components/ItemImage'

export function ChampionGrid() {
  return (
    <div className="flex flex-wrap">
      {Object.values(championDefinitions).map((championDefinition) => (
        <Link
          key={championDefinition.key}
          href={`/champion/${championDefinition.id}`}
        >
          <a>
            <SpriteImage image={championDefinition.image} />
          </a>
        </Link>
      ))}
    </div>
  )
}
