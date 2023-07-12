import { FC, HTMLAttributes } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface PokemonImageProps extends HTMLAttributes<HTMLImageElement> {
  pokemonId: number
  pokemonName: string
}

const PokemonImage: FC<PokemonImageProps> = ({
  pokemonId,
  pokemonName,
  className,
}) => {
  return (
    <Image
      src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
      alt={pokemonName}
      height={96}
      width={96}
      className={cn("flex justify-self-center", className)}
    />
  )
}

export default PokemonImage
