import { FC, HTMLAttributes } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Badge } from "../ui/badge"

interface ProfileOverviewProps extends HTMLAttributes<HTMLDivElement> {}

const ProfileOverview: FC<ProfileOverviewProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-background dark:text-slate-50 flex flex-col",
        className
      )}
    >
      <div>
        <Image
          src="/assets/user.jpg"
          alt="User"
          height={300}
          width={200}
          className="rounded-lg"
        />
      </div>
      <div>
        <div className="flex">
          <div>
            <div>
              <h1>Dhruva's Overview</h1>
            </div>
            <div>
              <Badge>Google</Badge>
              <Badge>Github</Badge>
              <Badge>Twitter</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
