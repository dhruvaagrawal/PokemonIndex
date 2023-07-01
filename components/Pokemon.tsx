"use client"

import { FC } from "react"
import Link from "next/link"

import { getPokemonByName } from "@/lib/pokemon.api"
import { capitalize } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface PokemonProps {
  pokemonName: string
}

const Pokemon: FC<PokemonProps> = ({ pokemonName }) => {
  const { data: pokemon, error, isLoading } = getPokemonByName(pokemonName)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!pokemon) {
    return null // Don't render anything if pokemon doesn't exist
  }

  const weightInKg = (pokemon.weight * 0.1).toFixed(1)
  const heightInM = (pokemon.height * 0.1).toFixed(1)

  return (
    <Link href={`/pokemons/${pokemon.id}`}>
      <Card className="inline-block w-full transition-all transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
        <CardHeader className="flex items-center pb-4">
          <CardTitle>{capitalize(pokemon.name)}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 items-center justify-center">
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            className="flex w-24 h-24 justify-self-center"
          />
          <Separator />
          <div className="grid grid-cols-[15px_1fr]">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <p className="text-sm font-medium leading-none">
              Weight: {weightInKg}kg
            </p>
          </div>
          <div className="grid grid-cols-[15px_1fr]">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <p className="text-sm font-medium leading-none">
              Height: {heightInM}m
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default Pokemon
