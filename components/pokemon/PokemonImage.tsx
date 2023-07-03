import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface PokemonImageProps extends HTMLAttributes<HTMLImageElement> {
  pokemonId: number
  pokemonName: string
}

const PokemonImage: FC<PokemonImageProps> = ({
  pokemonId,
  pokemonName,
  className,
  ...props
}) => {
  return (
    <img
      src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
      alt={pokemonName}
      className={cn("flex justify-self-center", className)}
      {...props}
    />
  )
}

export default PokemonImage
