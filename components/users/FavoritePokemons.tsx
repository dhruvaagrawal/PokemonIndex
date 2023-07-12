import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { Card } from "../ui/card"

interface FavoritePokemonsProps extends HTMLAttributes<HTMLDivElement> {}

const FavoritePokemons: FC<FavoritePokemonsProps> = ({ className }) => {
  return <Card className={cn(className)}>FavoritePokemons</Card>
}

export default FavoritePokemons
