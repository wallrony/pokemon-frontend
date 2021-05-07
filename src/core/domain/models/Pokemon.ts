import PokeStats from "./PokeStats";
import PokeType from "./PokeType";

interface Pokemon {
  id: number
  name: string
  image: string
  types: PokeType[]
  stats: PokeStats[]
  type: string
}

export default Pokemon