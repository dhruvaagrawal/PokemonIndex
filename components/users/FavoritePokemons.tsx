import { FC, HTMLAttributes } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Card } from "../ui/card"

interface FavoritePokemonsProps extends HTMLAttributes<HTMLDivElement> {}

const dummyPokemonData = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 4,
    name: "Pikachu",
    type: "Electric",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 5,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 6,
    name: "Eevee",
    type: "Normal",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 7,
    name: "Snorlax",
    type: "Normal",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 8,
    name: "Gengar",
    type: "Ghost/Poison",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 9,
    name: "Mewtwo",
    type: "Psychic",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
  {
    id: 10,
    name: "Dragonite",
    type: "Dragon/Flying",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`,
  },
]

const FavoritePokemons: FC<FavoritePokemonsProps> = ({ className }) => {
  return (
    <Card className={cn(className, "flex flex-grow overflow-auto")}>
      {dummyPokemonData.map(({ name, image }) => (
        <div className="rounded-full">
          <Image src={image} alt={name} width={400} height={400} />
        </div>
      ))}
    </Card>
  )
}

export default FavoritePokemons
