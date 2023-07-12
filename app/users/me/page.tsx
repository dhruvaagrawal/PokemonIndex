import { FC } from "react"

import { Navbar } from "@/components/site-header"
import ActivityChart from "@/components/users/ActivityChart"
import FavoritePokemons from "@/components/users/FavoritePokemons"
import FriendsSection from "@/components/users/FriendsSection"
import PokemonComparisonChart from "@/components/users/PokemonComparisonChart"
import ProfileOverview from "@/components/users/ProfileOverview"

interface MeProps {}

const Me: FC<MeProps> = ({}) => {
  return (
    <>
      <Navbar />
      <div className="mt-4 mx-4 grid grid-cols-4 gap-4">
        <div className="flex flex-col lg:col-span-3 gap-4">
          <ProfileOverview className="flex-grow" />
          <FavoritePokemons className="flex-grow" />
          <div className="flex flex-col">
            <PokemonComparisonChart />
            <ActivityChart />
            <div></div>
          </div>
        </div>
        <FriendsSection className="lg:col-span-1 h-full" />
      </div>
    </>
  )
}

export default Me
