import { FC, HTMLAttributes } from "react"

import { cardStyles } from "@/config/common.styles"
import { cn } from "@/lib/utils"

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
      <div className={cn(cardStyles, "p-4")}>
        <p className="text-center text-xl font-semibold">Pending Requests</p>
        <div className="space-y-2"></div>
      </div>
      <div className={cn(cardStyles, "p-4")}>
        <p className="text-center text-xl font-semibold">
          Most Interacted People
        </p>
        <div className="space-y-2">
          {friends.map(({ id, name, age }) => (
            <div key={id} className="h-10 flex items-center justify-center">
              {name}: {age}
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
