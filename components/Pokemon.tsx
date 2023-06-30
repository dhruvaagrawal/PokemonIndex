"use client"

import { FC } from "react"
import Image from "next/image"

import { getPokemonByName } from "@/lib/pokemon.api"

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
    <>
      <Card className="mb-4 inline-block">
        <CardHeader className="flex items-center pb-4">
          <CardTitle>
            {pokemon.name[0].toUpperCase() +
              pokemon.name.slice(1).toLocaleLowerCase()}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 items-center justify-center">
          <div className="w-24 h-24 overflow-hidden relative flex items-center">
            <Image
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              fill={true}
              className="absolute"
            />
          </div>
          <div className="flex-col rounded-md border p-4 space-y-2">
            <div className="grid grid-cols-[15px_1fr] items-start">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <p className="text-sm font-medium leading-none">
                Weight: {weightInKg}kg
              </p>
            </div>
            <div className="grid grid-cols-[15px_1fr] items-start">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <p className="text-sm font-medium leading-none">
                Height: {heightInM}m
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Pokemon
