import { FC, HTMLAttributes } from "react"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

import { cn } from "@/lib/utils"

import { Badge } from "../ui/badge"

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
      <div className="lg:col-span-4">
        <div className="grid grid-cols-2">
          <div className="flex col-span-2 justify-center space-x-4 my-2">
            <div className="text-center">
              <h1 className="text-4xl font-semibold">Dhruva's Overview</h1>
            </div>
            <div className="space-x-2 flex items-center">
              <Badge variant="outline">Google</Badge>
              <Badge variant="outline">Github</Badge>
              <Badge variant="outline">Twitter</Badge>
            </div>
          </div>
          <div className="col-span-2 p-2 ml-2 text-center rounded-md border dark:border-slate-800 dark:bg-background dark:text-slate-50">
            <blockquote className="italic text-sm text-gray-500">
              &#8220; just a guy, coding his way, through this messed up world,
              one incorrectly labelled variable at a time.&#8221;
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
