import { FC } from "react"

interface CurrentPokemonProps {
  params: {
    pokemonId: string
  }
}

const CurrentPokemon: FC<CurrentPokemonProps> = ({ params }) => {
  return <div>CurrentPokemon is {params.pokemonId}</div>
}

export default CurrentPokemon
