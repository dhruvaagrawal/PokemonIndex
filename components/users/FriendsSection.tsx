import { FC } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FriendsSectionProps {}

const FriendsSection: FC<FriendsSectionProps> = ({}) => {
  return (
    <Card className="">
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
