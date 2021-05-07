import PokemonInListResponse from "../../../core/domain/response/PokemonInListResponse";
import PokemonResponse from "../../../core/domain/response/PokemonResponse";

abstract class PokemonAbstractApi {
  abstract fetch(): Promise<PokemonInListResponse[]>
  abstract fetchOne(id: number): Promise<PokemonResponse>
}

export default PokemonAbstractApi
