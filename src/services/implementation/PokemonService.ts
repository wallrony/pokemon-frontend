import PokemonInList from "../../core/domain/models/PokemonInList"
import ServiceResponse from "../../core/domain/models/ServiceResponse"
import Facade from "../../data/Facade"
import PokemonAbstractService from "../abstraction/PokemonAbstractService"
import { responseToPokemonInList } from '../../core/utils/ResponseUtils'

class PokemonService extends PokemonAbstractService {
  async fetch(): Promise<ServiceResponse<PokemonInList[]>> {
    const result: ServiceResponse<PokemonInList[]> = {}

    try {
      const response = await new Facade().fetchPokemons()

      result.data = responseToPokemonInList(response)
    } catch (e) {
      result.error = e.toString()
    }

    return result;
  }
}

export default PokemonService
