import PokemonInListResponse from "../core/domain/response/PokemonInListResponse";
import PokemonResponse from "../core/domain/response/PokemonResponse";
import PokemonApi from "./api/implementation/PokemonApi";

class Facade {
  async fetchPokemons(): Promise<PokemonInListResponse[]> {
    return await new PokemonApi().fetch()
  }
}

export default Facade
