import PokemonInListResponse from '../domain/response/PokemonInListResponse'
import PokemonInList from '../domain/models/PokemonInList'

export function responseToPokemonInList(
  response: PokemonInListResponse[]
) {
  const list: PokemonInList[] = []

  for (let i = 0; i < response.length; i++) {
    const responseItem = response[i]

    const item: PokemonInList = {
      id: Number(responseItem.url[responseItem.url.length - 2]),
      name: responseItem.name,
    }

    list.push(item)
  }

  return list
}