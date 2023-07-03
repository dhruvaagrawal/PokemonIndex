import { FC, HTMLAttributes } from "react"

import { PokemonType } from "@/types/pokemon"
import { getPokemonSpeciesById } from "@/lib/pokemon.api"
import { capitalize, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

import { Card, CardContent } from "../ui/card"
import VersionDropdown from "./VersionDropdown"

interface PokemonSpeciesInfoProps extends HTMLAttributes<HTMLDivElement> {
  pokemonId: number
  types: PokemonType[]
}

const PokemonSpeciesInfo: FC<PokemonSpeciesInfoProps> = async ({
  pokemonId,
  types,
  className,
}) => {
  /*
    1.`gender_rate`: This signifies if the Pokemon is a male, female, or it is genderless. This value
      gives numbers in eights i.e. if the number is closer to 8, then they are female, and if the
      number is closer to 1, they are male. If the number is -1, then the Pokemon is genderless. Can
      use a progress bar sort of bar, but which goes from inside out, each side tracking 50%. If the
      value is 4, then they are equally male and female. If the value is 1, then they are male. If the
      value is 8, then they are female.
    2. `base_happiness`: This signifies if the Pokemon is happy getting caught by a normal Pokeball.
      Will use a series of 5 faces (as they do in reviews). The max value is 255. Will divide the
      value by the max_value, and the face closest to that value will get filled.
    3. `habitat`: This signifies where the Pokemon can be found. This value will have a fixed set of values
      attached to it. Can use a conditional to render the habitat based on the value. Can be either an icon,
      or the background image.
  */
  const { gender_rate, genera, habitat, flavor_text_entries, base_happiness } =
    await getPokemonSpeciesById(pokemonId)
  let descriptions = new Set<string>()
  let versions = new Set<string>()
  let genusVal = ""
  flavor_text_entries.map(({ flavor_text, language, version }) => {
    if (language.name === "en") descriptions.add(flavor_text)
    versions.add(version.name)
  })
  genera.map(({ genus, language }) => {
    if (language.name === "en") genusVal = genus
  })
  // Convert descriptions set to array
  let descriptionsArray = [...descriptions]

  // Generate a random index based on the length of the array
  let randomIndex = Math.floor(Math.random() * descriptionsArray.length)
  return (
    <div className={className}>
      <div className="mt-2 p-4 w-96 rounded border-l-4 border-b-4 border-slate-900 shadow-xl">
        <p className="text-l font-medium">{descriptionsArray[randomIndex]}</p>
      </div>
      <div className="flex mt-6">
        <h3 className="mr-2 flex items-center">Types:</h3>
        {types.map(({ type }) => (
          <Badge className={cn("h-10 text-md mr-2", `bg-slate-900`)}>
            {capitalize(type.name)}
          </Badge>
        ))}
      </div>
      <div className="flex mt-6">
        <h3 className="mr-2 flex items-center">Genus:</h3>
        <Badge className={cn("h-10 text-md mr-2", `bg-slate-900`)}>
          {genusVal}
        </Badge>
      </div>
      <div className="flex mt-6">
        <h3 className="mr-2 flex items-center">Habitat:</h3>
        <Badge className={cn("h-10 text-md mr-2", `bg-slate-900`)}>
          {capitalize(habitat.name)}
        </Badge>
      </div>
      {/* <VersionDropdown versions={[...versions]} className="mt-4" /> */}
    </div>
  )
}

export default PokemonSpeciesInfo
