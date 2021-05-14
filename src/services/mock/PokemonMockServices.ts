import PokemonInList from "../../core/domain/models/PokemonInList";
import ServiceResponse from "../../core/domain/models/ServiceResponse";
import { responseToPokemonInList } from "../../core/utils/ResponseUtils";
import PokemonApiMock from "../../data/api/mock/PokemonApiMock";
import PokemonAbstractService from "../abstraction/PokemonAbstractService";

class PokemonMockServices extends PokemonAbstractService {
  async fetch(): Promise<ServiceResponse<PokemonInList[]>> {
    const response: ServiceResponse<PokemonInList[]> = {}

    const result = await new PokemonApiMock().fetch()

    response.data = responseToPokemonInList(result)

    return response
  }
}

export default PokemonMockServices
