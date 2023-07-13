import { FC, HTMLAttributes } from "react"

import { cardStyles } from "@/config/common.styles"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface PokemonComparisonChartProps extends HTMLAttributes<HTMLDivElement> {}

const PokemonComparisonChart: FC<PokemonComparisonChartProps> = ({
  className,
}) => {
  return <div className={cn(cardStyles, className)}>PokemonComparisonChart</div>
}

export default PokemonComparisonChart
