import { FC, HTMLAttributes } from "react"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

import { cardStyles, innerCardStyles } from "@/config/common.styles"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

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
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/2.svg`,
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/3.svg`,
  },
  {
    id: 4,
    name: "Pikachu",
    type: "Electric",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg`,
  },
  {
    id: 5,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/5.svg`,
  },
  {
    id: 6,
    name: "Bulbasaur",
    type: "Grass/Poison",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg`,
  },
  {
    id: 7,
    name: "Charmander",
    type: "Fire",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg`,
  },
  {
    id: 8,
    name: "Squirtle",
    type: "Water",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/8.svg`,
  },
  {
    id: 9,
    name: "Pikachu",
    type: "Electric",
    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/9.svg`,
  },
]

const FavoritePokemons: FC<FavoritePokemonsProps> = ({ className }) => {
  return (
    <div
      className={cn(
        cardStyles,
        "grid overflow-auto p-4 gap-2 grid-cols-10 text-slate-950",
        className
      )}
    >
      {dummyPokemonData.map(({ name, image }) => (
        <div className={cn(innerCardStyles, "col-span-1")}>
          <Image src={image} alt={name} width={100} height={100} />
        </div>
      ))}
      <div
        className={cn(
          innerCardStyles,
          "col-span-1 grid-cols-5 text-gray-400 dark:text-gray-400"
        )}
      >
        <div className="col-span-3 flex justify-end">
          <Balancer>View More</Balancer>
        </div>
        <div className="col-span-2 flex justify-start group-hover:transform group-hover:translate-x-16 transition-transform duration-200 ease-in-out">
          <Icons.right />
        </div>
      </div>
    </div>
  )
}

export default FavoritePokemons
