import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { Card } from "../ui/card"

interface ActivityChartProps extends HTMLAttributes<HTMLDivElement> {}

const ActivityChart: FC<ActivityChartProps> = ({ className }) => {
  return <Card className={cn(className)}>ActivityChart</Card>
}

export default ActivityChart
