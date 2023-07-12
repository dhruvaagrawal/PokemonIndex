import { FC } from "react"

import { PokemonNameURLPair } from "@/types/pokemon"
import { PAGINATION_LIMIT } from "@/lib/constants"
import { getPokemonList } from "@/lib/pokemon.api"
import PokemonCard from "@/components/pokemon/PokemonCard"

interface PokemonCardListProps {}

const PokemonCardList: FC<PokemonCardListProps> = async ({}) => {
  const data = await getPokemonList(PAGINATION_LIMIT, 0)

  if (!data) {
    return null
  }

  const pokemonUrlPairList: PokemonNameURLPair[] = data.results
  return (
    <div className="m-4 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4">
      {pokemonUrlPairList.map(({ name }) => {
        return <PokemonCard key={name} pokemonName={name} />
      })}
    </div>
  )
}

export default PokemonCardList
