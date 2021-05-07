import ServiceResponse from "../../core/domain/models/ServiceResponse";
import PokemonInList from "../../core/domain/models/PokemonInList";

abstract class PokemonAbstractService {
  abstract fetch(): Promise<ServiceResponse<PokemonInList[]>>;
}

export default PokemonAbstractService
