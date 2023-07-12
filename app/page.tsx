import PokemonCardList from "@/components/pokemon/PokemonCardList"
import { Navbar } from "@/components/site-header"

export default async function Home() {
  return (
    <>
      <Navbar />
      <PokemonCardList />
    </>
  )
}
