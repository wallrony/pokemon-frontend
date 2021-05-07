import PokemonInListResponse from "../../../core/domain/response/PokemonInListResponse";
import PokemonResponse from "../../../core/domain/response/PokemonResponse";
import { getPokemonInListResponseList, getPokemonResponse } from "../../static/PokemonStaticData";
import PokemonAbstractApi from "../abstraction/PokemonAbstractApi";

class PokemonApiMock extends PokemonAbstractApi {
  async fetch() {
    const response: PokemonInListResponse[] = getPokemonInListResponseList()

    return response
  }

  async fetchOne(id: number): Promise<PokemonResponse> {
    const response: PokemonResponse = getPokemonResponse()

    return response
  }
}

export default PokemonApiMock
