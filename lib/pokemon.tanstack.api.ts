import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { PaginatedPokemon, Pokemon } from "@/types/pokemon"

export const getPokemonByName = (pokemonName: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  return useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: async () => {
      const { data } = await axios.get(url)
      return data as Pokemon
    },
  })
}

export const getPokemons = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
        params: { limit: limit, offset: offset },
      })
      return data as PaginatedPokemon
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours (this param accepts time in milliseconds)
    cacheTime: 1000 * 60 * 60 * 24, // Adjust the cache time (24 hours in this case)
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
