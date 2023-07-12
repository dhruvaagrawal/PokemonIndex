import { FC, HTMLAttributes } from "react"
import Image from "next/image"

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
      <div className="lg:col-span-1">
        <Image
          src="/assets/user.jpg"
          alt="User"
          height={200}
          width={200}
          className="rounded-lg shadow-2xl"
        />
      </div>
      <div className="lg:col-span-4 my-2">
        <div className="grid grid-cols-2">
          <div className="grid col-span-2 grid-cols-5">
            <div className="lg:col-span-3 text-center">
              <h1 className="text-5xl font-semibold">Dhruva's Overview</h1>
            </div>
            <div className="lg:col-span-2 space-x-2 flex items-center">
              <Badge variant="outline">Google</Badge>
              <Badge variant="outline">Github</Badge>
              <Badge variant="outline">Twitter</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
