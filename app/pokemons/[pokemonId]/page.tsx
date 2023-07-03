import { FC } from "react"

import { getPokemonDetailsById } from "@/lib/pokemon.api"
import PokemonImage from "@/components/PokemonImage"

interface CurrentPokemonProps {
  params: {
    pokemonId: string
  }
}

const CurrentPokemon: FC<CurrentPokemonProps> = async ({ params }) => {
  const pokemon = await getPokemonDetailsById(Number(params.pokemonId))
  const { weight, name, id, height, types } = pokemon

  const weightInKg = (weight * 0.1).toFixed(1)
  const heightInM = (height * 0.1).toFixed(1)

  const { name: primaryType } = types[0].type
  return (
    <div className={`p-4 bg-electric min-w-screen min-h-screen flex`}>
      <div className="w-2/5"></div>
      <div className="w-2/5 flex justify-center items-center relative">
        <div className="m-4 max-w-full h-96 flex items-center justify-center relative">
          <PokemonImage
            pokemonId={id}
            pokemonName={name}
            className="w-96 h-full"
          />
        </div>
        <div className="absolute top-1/4 transform translate-y-[2.2rem] -translate-x-[16.45rem] h-0.5 bg-black w-48"></div>
        <div className="absolute bottom-1/4 transform -translate-y-[2.2rem] -translate-x-[16.45rem] h-0.5 bg-black w-48"></div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 w-0.5 h-96 bg-black"></div>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default CurrentPokemon
