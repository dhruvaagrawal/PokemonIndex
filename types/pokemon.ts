type URL = string
type StatKeys =
  | "speed"
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"

type Language =
  | "zh-Hans"
  | "ja"
  | "es"
  | "en"
  | "de"
  | "it"
  | "fr"
  | "zh-Hant"
  | "ko"
  | "ja-Hrkt"

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
  forms: PokemonForm[]
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

interface Ability {
  is_hidden: boolean
  slot: number
  ability: PokemonNameURLPair
}

export interface PokemonNameURLPair {
  name: string
  url: URL
}

interface PokemonStatNameURLPair {
  name: StatKeys
  url: URL
}

interface PokemonForm extends PokemonNameURLPair {}

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
  stat: PokemonStatNameURLPair
}

export interface PokemonType {
  slot: number
  type: PokemonNameURLPair
}

export interface PastType {
  generation: PokemonNameURLPair
  types: PokemonType[]
}

export interface PokemonSpecies {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: PokemonNameURLPair
  pokedex_numbers: PokedexNumber[]
  egg_groups: PokemonNameURLPair[]
  color: PokemonNameURLPair
  shape: PokemonNameURLPair
  evolves_from_species: PokemonNameURLPair
  evolution_chain: EvolutionChain
  habitat: any
  generation: PokemonNameURLPair
  names: Name[]
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: FormDescription[]
  genera: Genera[]
  varieties: PokemonObj[]
}

interface PokemonObj {
  is_default: boolean
  pokemon: PokemonNameURLPair
}

interface Genera {
  genus: string
  language: PokemonNameURLPair
}

interface FormDescription {
  description: string
  language: PokemonNameURLPair
}

interface FlavorTextEntry {
  flavor_text: string
  language: LanguageDetail
  version: PokemonNameURLPair
}

interface Name {
  name: string
  language: PokemonNameURLPair
}

interface EvolutionChain {
  url: URL
}

interface PokedexNumber {
  entry_number: number
  pokedex: PokemonNameURLPair
}

interface LanguageDetail {
  name: Language
  url: URL
}
