import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FriendsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const friends = [
  { id: "friend-1", name: "John Doe", age: 25 },
  { id: "friend-2", name: "Jane Smith", age: 30 },
  { id: "friend-3", name: "David Johnson", age: 28 },
  { id: "friend-4", name: "Emily Williams", age: 32 },
  { id: "friend-5", name: "Michael Brown", age: 27 },
]

const FriendsSection: FC<FriendsSectionProps> = ({ className }) => {
  return (
    <Card className={cn("rounded-xl", className)}>
      <CardHeader className="text-center">
        <CardTitle>Friends Section</CardTitle>
      </CardHeader>
      <CardContent>
        <Card>
          <CardHeader className="text-center">
            <p>Pending Requests</p>
          </CardHeader>
          <CardContent className="gap-2">
            {friends.map(({ id, name, age }) => (
              <Card key={id} className="h-10 flex items-center justify-center">
                {name}: {age}
              </Card>
            ))}
          </CardContent>
        </Card>
      </CardContent>
      <CardContent>
        <Card>
          <CardHeader className="text-center">
            <p>Most Interacted People</p>
          </CardHeader>
          <CardContent>
            {friends.map(({ id, name, age }) => (
              <Card key={id} className="h-10 flex items-center justify-center">
                {name}: {age}
              </Card>
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default FriendsSection
