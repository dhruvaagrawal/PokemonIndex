import { FC, HTMLAttributes } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface PokemonImageProps extends HTMLAttributes<HTMLImageElement> {
  pokemonId: number
  pokemonName: string
  height: number
  width: number
}

const PokemonImage: FC<PokemonImageProps> = ({
  pokemonId,
  pokemonName,
  className,
  height,
  width,
}) => {
  return (
    <Image
      src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
      alt={pokemonName}
      height={height}
      width={width}
      className={cn("flex justify-self-center", className)}
    />
  )
}

export default PokemonImage
