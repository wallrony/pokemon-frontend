import PokemonInListResponse from "../../core/domain/response/PokemonInListResponse";
import PokemonResponse from "../../core/domain/response/PokemonResponse";

export function getPokemonInListResponseList(): PokemonInListResponse[] {
  return [
    {
      url: '1',
      name: 'bulbasaur',
    },
    {
      url: '1',
      name: 'charmander',
    },
    {
      url: '1',
      name: 'squirtle',
    },
    {
      url: '1',
      name: 'pikachu',
    }
  ];
}

export function getPokemonResponse(): PokemonResponse {
  return {
    id: 1,
    name: 'bulbasaur',
    stats: [
      {
        base_stat: 45,
        stat: {
          name: 'hp'
        }
      },
      {
        base_stat: 49,
        stat: {
          name: 'attack'
        }
      },
      {
        base_stat: 49,
        stat: {
          name: 'defense'
        }
      },
      {
        base_stat: 65,
        stat: {
          name: 'special-attack'
        }
      },
      {
        base_stat: 65,
        stat: {
          name: 'special-defense'
        }
      },
      {
        base_stat: 45,
        stat: {
          name: 'speed'
        }
      }
    ],
    types: [
      {
        type: {
          name: 'grass'
        },
      },
      {
        type: {
          name: 'poison'
        },
      },
    ]
  }
}
