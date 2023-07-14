import { FC } from "react"

import { Navbar } from "@/components/site-header"
import FavouritePokemons from "@/components/users/FavouritePokemons"
import FriendsSection from "@/components/users/FriendsSection"
import ProfileOverview from "@/components/users/ProfileOverview"

interface MeProps {}

const Me: FC<MeProps> = ({}) => {
  return (
    <div className="p-2">
      <Navbar />
      <div className="mt-4 mx-4 grid grid-cols-4 gap-4">
        <div className="flex flex-col lg:col-span-3 gap-4">
          <ProfileOverview />
          <FavouritePokemons />
          <div className="flex flex-grow gap-4"></div>
        </div>
        <div className="lg:col-span-1 flex">
          <FriendsSection className="flex-grow h-full" />{" "}
        </div>
      </div>
    </div>
  )
}

export default Me
