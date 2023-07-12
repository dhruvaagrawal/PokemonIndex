import { FC, HTMLAttributes } from "react"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

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
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-background dark:text-slate-50 grid grid-cols-5 p-4",
        className
      )}
    >
      <div className="flex lg:col-span-1">
        <Image
          src="/assets/user.jpg"
          alt="User"
          height={200}
          width={200}
          className="rounded-lg shadow-2xl"
        />
      </div>
      <div className="lg:col-span-4 flex flex-col">
        <div className="flex flex-grow-0">
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
            <div className="col-span-2 p-2 ml-2 text-center rounded-md border dark:border-slate-800 dark:bg-background dark:text-slate-50">
              <blockquote className="italic text-md text-gray-500">
                <Balancer>
                  &#8220; just a guy, coding his way, through this messed up
                  world, one incorrectly labelled variable at a time.&#8221;
                </Balancer>
              </blockquote>
            </div>
          </div>
        </div>
        <Card className="flex flex-grow overflow-auto">
          {dummyBadgesArray.map(({ name, image }) => (
            <div className="rounded-full">
              <Image src={image} alt={name} width={40} height={40} />
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

export default ProfileOverview
