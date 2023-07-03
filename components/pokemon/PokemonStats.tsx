import { FC, HTMLAttributes } from "react"

import { Stat } from "@/types/pokemon"
import { POKEMON_STAT_LABEL_MAPPING } from "@/lib/constants"
import { Progress } from "@/components/ui/progress"

interface PokemonStatsProps extends HTMLAttributes<HTMLDivElement> {
  stats: Stat[]
}

const PokemonStats: FC<PokemonStatsProps> = ({ stats, className }) => {
  return (
    <div className={className}>
      {stats.map(({ base_stat: baseStat, stat }) => (
        <div className="mt-2">
          <h3>{POKEMON_STAT_LABEL_MAPPING[stat.name]}</h3>
          <Progress value={baseStat} className="h-6" />
        </div>
      ))}
    </div>
  )
}

export default PokemonStats
