type URL = string

export interface PaginatedPokemon {
  count: number
  next: URL | null
  previous: URL | null
  results: PokemonNameURLPair[]
}

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
  forms: Form[]
  game_indices: GameIndices[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Move[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: PokemonType[]
  past_types: PastType[]
}

export interface Ability {
  is_hidden: boolean
  slot: number
  ability: PokemonNameURLPair
}

export interface PokemonNameURLPair {
  name: string
  url: URL
}

export interface Form extends PokemonNameURLPair {}

export interface GameIndices {
  game_index: number
  version: PokemonNameURLPair
}

export interface HeldItem {
  item: PokemonNameURLPair
  version_details: VersionDetail[]
}

export interface VersionDetail {
  rarity: number
  version: PokemonNameURLPair
}

export interface Move {
  move: PokemonNameURLPair
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  version_group: PokemonNameURLPair
  move_learn_method: PokemonNameURLPair
}

export interface Species extends PokemonNameURLPair {}

export interface Sprites {
  back_default: string
  back_female: null | string
  back_shiny: string
  back_shiny_female: null | string
  front_default: string
  front_female: null | string
  front_shiny: string
  front_shiny_female: null | string
  other: any // other, versions can have a varying structure based on the data, so using any to depict any kind of content
  versions: any
}

export interface Stat {
  base_stat: number
  effort: number
  stat: PokemonNameURLPair
}

export interface PokemonType {
  slot: number
  type: PokemonNameURLPair
}

export interface PastType {
  generation: PokemonNameURLPair
  types: PokemonType[]
}
