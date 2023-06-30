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
    <div className="my-4 grid grid-cols-8 gap-4">
      {pokemonUrlPairList.map(({ name }) => {
        return <Pokemon key={name} pokemonName={name} />
      })}
    </div>
  )
}
