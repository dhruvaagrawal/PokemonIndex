import { PokemonNameURLPair } from "@/types/pokemon"
import { PAGINATION_LIMIT } from "@/lib/constants"
import { getPokemonList } from "@/lib/pokemon.api"
import PokemonCard from "@/components/pokemon/PokemonCard"

export default async function Home() {
  const data = await getPokemonList(PAGINATION_LIMIT, 0)

  if (!data) {
    return null
  }

  const pokemonUrlPairList: PokemonNameURLPair[] = data.results

  return (
    <div className="m-4 grid grid-cols-8 gap-4">
      {pokemonUrlPairList.map(({ name }) => {
        return <PokemonCard key={name} pokemonName={name} />
      })}
    </div>
  )
}
