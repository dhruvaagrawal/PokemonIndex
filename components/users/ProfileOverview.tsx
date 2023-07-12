import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { Card } from "../ui/card"

interface ProfileOverviewProps extends HTMLAttributes<HTMLDivElement> {}

const ProfileOverview: FC<ProfileOverviewProps> = ({ className }) => {
  return <Card className={cn(className)}>ProfileOverview</Card>
}

export default ProfileOverview
