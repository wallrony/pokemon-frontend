import PokemonInListResponse from "../../../core/domain/response/PokemonInListResponse"
import PokemonResponse from "../../../core/domain/response/PokemonResponse"
import PokemonAbstractApi from "../abstraction/PokemonAbstractApi"
import { apiGet } from './Client'

class PokemonApi extends PokemonAbstractApi {
  async fetch() {
    const response = await apiGet<PokemonInListResponse[]>('pokemon')

    return response['results']
  }

  async fetchOne(id: number) {
    const response = await apiGet<PokemonResponse>(`pokemon/${id}`)

    return response
  }
}

export default PokemonApi
