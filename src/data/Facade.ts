import PokemonInListResponse from "../core/domain/response/PokemonInListResponse";
import PokemonApi from "./api/implementation/PokemonApi";

class Facade {
  async fetchPokemons(): Promise<PokemonInListResponse[]> {
    return await new PokemonApi().fetch()
  }
}

export default Facade
