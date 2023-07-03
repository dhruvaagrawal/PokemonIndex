import { FC, HTMLAttributes } from "react"

import { PokemonType } from "@/types/pokemon"
import { capitalize, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface PokemonTypeInfoProps extends HTMLAttributes<HTMLDivElement> {
  types: PokemonType[]
}

const PokemonTypeInfo: FC<PokemonTypeInfoProps> = ({ types, className }) => {
  return (
    <div className={className}>
      <h3 className="mr-2 flex items-center">Types:</h3>
      {types.map(({ type }) => (
        <Badge className={cn("h-10 text-md mr-2", `bg-slate-900`)}>
          {capitalize(type.name)}
        </Badge>
      ))}
    </div>
  )
}

export default PokemonTypeInfo
