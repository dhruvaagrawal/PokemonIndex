import { FC } from "react"

import FriendsSection from "@/components/users/FriendsSection"

interface MeProps {}

const Me: FC<MeProps> = ({}) => {
  return (
    <div className="flex mt-4">
      <div className=""></div>
      <FriendsSection />
    </div>
  )
}

export default Me
