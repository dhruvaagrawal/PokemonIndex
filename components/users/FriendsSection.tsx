import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FriendsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const FriendsSection: FC<FriendsSectionProps> = ({ className }) => {
  return (
    <Card className={cn("rounded-xl", className)}>
      <CardHeader className="text-center">
        <CardTitle>Friends Section</CardTitle>
      </CardHeader>
      <CardContent>
        <Card>
          <CardHeader>
            <p>Pending Requests</p>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </CardContent>
      <CardContent>
        <Card>
          <CardHeader>
            <p>Most Interacted People</p>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default FriendsSection
