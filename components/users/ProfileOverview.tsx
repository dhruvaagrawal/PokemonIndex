import { FC, HTMLAttributes } from "react"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

import { cardStyles, innerCardStyles } from "@/config/common.styles"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const dummyBadgesArray = [
  {
    name: "Bronze Badge",
    description: "Achieved bronze level",
    image: "/assets/bronze-medal.png",
  },
  {
    name: "Silver Badge",
    description: "Achieved silver level",
    image: "/assets/silver-medal.png",
  },
  {
    name: "Gold Badge",
    description: "Achieved gold level",
    image: "/assets/gold-medal.png",
  },
  // Add more dummy badge objects as needed
]

interface ProfileOverviewProps extends HTMLAttributes<HTMLDivElement> {}

const ProfileOverview: FC<ProfileOverviewProps> = ({ className }) => {
  return (
    <div className={cn(cardStyles, className, "grid-cols-6 auto-rows-min p-4")}>
      <div className="flex lg:col-span-1 items-center">
        <Image
          src="/assets/user.jpg"
          alt="User"
          height={200}
          width={200}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col lg:col-span-5 flex-auto ml-4">
        <div className="grid grid-cols-2 my-2 gap-4">
          <div className="flex col-span-2 justify-center space-x-4">
            <div className="text-center">
              <h1 className="text-5xl font-semibold">Dhruva's Overview</h1>
            </div>
            <div className="space-x-2 flex items-center">
              <Badge variant="outline">Google</Badge>
              <Badge variant="outline">Github</Badge>
              <Badge variant="outline">Twitter</Badge>
            </div>
          </div>
          <div className={cn(innerCardStyles, "col-span-full p-2 text-center")}>
            <blockquote className="italic text-md text-gray-500">
              <Balancer>
                &#8220; just a guy, coding his way, through this messed up
                world, one incorrectly labelled variable at a time. &#8221;
              </Balancer>
            </blockquote>
          </div>
          <div className={cn("py-2 col-span-1 flex overflow-auto space-x-4")}>
            {dummyBadgesArray.map(({ name, image }) => (
              <div className={cn(innerCardStyles)}>
                <Image src={image} alt={name} width={90} height={40} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
