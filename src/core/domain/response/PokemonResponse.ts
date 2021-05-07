import PokeStatsResponse from "./PokeStatsResponse";
import PokeTypeResponse from "./PokeTypeResponse";

interface PokemonResponse {
  id: number
  name: string
  types: PokeTypeResponse[]
  stats: PokeStatsResponse[]
}

export default PokemonResponse
