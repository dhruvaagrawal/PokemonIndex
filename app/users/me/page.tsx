import { FC } from "react"

import { Navbar } from "@/components/site-header"
import FavoritePokemons from "@/components/users/FavoritePokemons"
import FriendsSection from "@/components/users/FriendsSection"
import ProfileOverview from "@/components/users/ProfileOverview"

interface MeProps {}

const Me: FC<MeProps> = ({}) => {
  return (
    <>
      <Navbar />
      <div className="mt-4 mx-4 grid grid-cols-4">
        <div className="lg:col-span-3">
          <ProfileOverview />
          <FavoritePokemons />
          <div>
            <div></div>
            {/* <UserActivityChart /> */}
            <div></div>
          </div>
        </div>
        <FriendsSection className="lg:col-span-1 h-screen" />
      </div>
    </>
  )
}

export default Me
