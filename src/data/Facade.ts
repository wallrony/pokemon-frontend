import PokemonResponse from "../core/domain/response/PokemonResponse";
import PokemonApi from "./api/implementation/PokemonApi";

class Facade {
  async fetchPokemons(): Promise<PokemonResponse[]> {
    return await new PokemonApi().fetch()
  }
}

export default Facade
