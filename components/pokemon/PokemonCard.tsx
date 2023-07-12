import { FC } from "react"
import Link from "next/link"
import { Balancer } from "react-wrap-balancer"

import { getPokemonDetailsByName } from "@/lib/pokemon.api"
import { capitalize, cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PokemonImage from "@/components/pokemon/PokemonImage"

interface PokemonProps {
  pokemonName: string
}

const PokemonCard: FC<PokemonProps> = async ({ pokemonName }) => {
  const pokemon = await getPokemonDetailsByName(pokemonName)

  if (!pokemon) {
    return null // Don't render anything if pokemon doesn't exist
  }

  const { weight, name, id, height, types } = pokemon

  const weightInKg = (weight * 0.1).toFixed(1)
  const heightInM = (height * 0.1).toFixed(1)

  const { name: primaryType } = types[0].type

  return (
    <Link href={`/pokemons/${id}`}>
      <Card
        className={cn(
          "inline-block w-full transition-all transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border-transparent",
          `bg-${primaryType}`
        )}
      >
        <CardHeader className="flex items-center pb-4">
          <CardTitle>{capitalize(name)}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 items-center justify-center">
          <PokemonImage
            pokemonId={id}
            pokemonName={name}
            className="w-24 h-24"
          />
          <Separator />
          <div className="grid grid-cols-[15px_1fr]">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <p className="text-sm font-medium leading-none">
              <Balancer>Weight: {weightInKg}kg</Balancer>
            </p>
          </div>
          <div className="grid grid-cols-[15px_1fr]">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <p className="text-sm font-medium leading-none">
              <Balancer>Height: {heightInM}m</Balancer>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default PokemonCard
