import { PaginatedPokemon, Pokemon, PokemonSpecies } from "@/types/pokemon"

export const getPokemonList = async (
  limit: number,
  offset: number
): Promise<PaginatedPokemon> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export const getPokemonDetailsByName = async (
  pokemonName: string
): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export const getPokemonDetailsById = async (
  pokemonId: number
): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export const getPokemonSpeciesById = async (
  pokemonId: number
): Promise<PokemonSpecies> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
