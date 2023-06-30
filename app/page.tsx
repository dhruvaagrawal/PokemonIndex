"use client"

import { PokemonNameURLPair } from "@/types/pokemon"
import { PAGINATION_LIMIT } from "@/lib/constants"
import { getPokemons } from "@/lib/pokemon.api"
import Pokemon from "@/components/Pokemon"

export default function Home() {
  const { data, error, isLoading } = getPokemons(PAGINATION_LIMIT, 0)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return null
  }

  const pokemonUrlPairList: PokemonNameURLPair[] = data.results

  return (
    <div className="my-4 space-x-4">
      {pokemonUrlPairList.map(({ name }) => {
        return <Pokemon pokemonName={name} />
      })}
    </div>
  )
}
