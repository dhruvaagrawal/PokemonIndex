import { FC, HTMLAttributes } from "react"
import Link from "next/link"
import { UserPlus2 } from "lucide-react"

import { cardStyles } from "@/config/common.styles"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "../ui/button"

interface FriendsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const friends = [
  { id: "friend-1", name: "John Doe", age: 25 },
  { id: "friend-2", name: "Jane Smith", age: 30 },
  { id: "friend-3", name: "David Johnson", age: 28 },
  { id: "friend-4", name: "Emily Williams", age: 32 },
  { id: "friend-5", name: "Michael Brown", age: 27 },
]

const activities = [
  { id: "activity-1", name: "John Doe", age: 25 },
  { id: "activity-2", name: "Jane Smith", age: 30 },
  { id: "activity-3", name: "David Johnson", age: 28 },
  { id: "activity-4", name: "Emily Williams", age: 32 },
  { id: "activity-5", name: "Michael Brown", age: 27 },
]

const FriendsSection: FC<FriendsSectionProps> = ({ className }) => {
  return (
    <div className={cn(className, "space-y-4")}>
      <div className={cn(cardStyles, "p-4 gap-4")}>
        <div className="grid grid-cols-3">
          <p className="text-xl font-semibold col-span-2">Pending Requests</p>
          <Link
            href="/users/me/requests"
            className="text-blue-500 text-sm text-end"
          >
            View More
          </Link>
        </div>
        <div className="bg-pastel-green-200 h-auto rounded-md py-6">
          <div className="grid grid-cols-5 h-full gap-4">
            <div className="flex col-span-1 justify-end items-start">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col col-span-3 gap-2">
              <div>
                <p className="text-md font-medium leading-none dark:text-black">
                  Jackson Lee
                </p>
                <p className="text-sm text-green-800">10 mutual friends</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="dark:bg-black dark:text-white">
                  Confirm
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="dark:bg-red-500 dark:text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground text-xs">2 hr ago</p>
          </div>
        </div>
      </div>
      <div className={cn(cardStyles, "py-4 gap-4")}>
        <p className="text-center text-xl font-semibold">
          People w/ Most Interactions
        </p>
        <div className="space-y-6 py-4">
          {friends.map(({ id, name, age }) => (
            <div className="h-auto rounded-md">
              <div className="grid grid-cols-5 h-full gap-4">
                <div className="flex col-span-1 justify-end items-start">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col col-span-2 gap-1">
                  <p className="text-md font-medium leading-none">{name}</p>
                  <p className="text-xs text-gray-500">Suggested for you</p>
                </div>
                <div className="col-span-2 flex justify-center">
                  <Button
                    size="sm"
                    className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-pastel-blue-300 text-blue-900 hover:text-white dark:hover:text-black"
                  >
                    <UserPlus2 className="text-lg" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn(cardStyles, "p-4")}>
        <p className="text-center text-xl font-semibold">Recent Activity</p>
        <div className="space-y-2">
          {" "}
          {friends.map(({ id, name, age }) => (
            <div key={id} className="h-10 flex items-center justify-center">
              {name}: {age}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FriendsSection
