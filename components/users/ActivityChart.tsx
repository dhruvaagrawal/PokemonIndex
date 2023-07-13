import { FC, HTMLAttributes } from "react"

import { cardStyles } from "@/config/common.styles"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface ActivityChartProps extends HTMLAttributes<HTMLDivElement> {}

const ActivityChart: FC<ActivityChartProps> = ({ className }) => {
  return <div className={cn(cardStyles, className)}>ActivityChart</div>
}

export default ActivityChart
