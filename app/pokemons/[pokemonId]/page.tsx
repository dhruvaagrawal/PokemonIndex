import { FC } from "react"

import { getPokemonDetailsById } from "@/lib/pokemon.api"
import { capitalize, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
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
      <div className="w-2/5 flex justify-center transform translate-y-48">
        <div>
          <p className="text-7xl text-center font-black">{capitalize(name)}</p>
          <div className="flex mt-4">
            <h3 className="mr-2 flex items-center">Types:</h3>
            {types.map(({ type }) => (
              <Badge className={cn("h-10 text-md mr-2", `bg-slate-900`)}>
                {capitalize(type.name)}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/5 flex justify-center items-center relative">
        <div className="m-4 max-w-full h-96 flex items-center justify-center relative">
          <PokemonImage
            pokemonId={id}
            pokemonName={name}
            className="w-96 h-full"
          />
        </div>
        {/* This is the top horizontal line component */}
        <div className="absolute top-1/4 transform translate-y-[2.2rem] -translate-x-[16.45rem] h-0.5 bg-black w-48"></div>
        {/* This is the bottom horizontal line component used to display the weight */}
        <p className="transform translate-y-[10.75rem] -translate-x-[29.5rem] mt-1">
          Weight: {weightInKg}kg
        </p>
        <div className="absolute bottom-1/4 transform -translate-y-[2.2rem] -translate-x-[16.45rem] h-0.5 bg-black w-48"></div>
        {/* This is the vertical line component used to display the height */}
        <p className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 -rotate-90">
          Height: {heightInM}m
        </p>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 w-0.5 h-96 bg-black"></div>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default CurrentPokemon
