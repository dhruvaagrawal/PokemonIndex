import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface PokemonComparisonChartProps extends HTMLAttributes<HTMLDivElement> {}

const PokemonComparisonChart: FC<PokemonComparisonChartProps> = ({
  className,
}) => {
  return <Card className={cn(className)}>PokemonComparisonChart</Card>
}

export default PokemonComparisonChart
