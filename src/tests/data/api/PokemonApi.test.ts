import '@testing-library/jest-dom';
import PokemonResponse from '../../../core/domain/response/PokemonResponse';
import PokemonApi from '../../../data/api/implementation/PokemonApi';
import PokemonApiMock from '../../../data/api/mock/PokemonApiMock';

describe('PokemonApi', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  it('Must return a pokemon in list response with url and name', async () => {
    process.env.NEXT_PUBLIC_BACKEND_API = 'https://pokeapi.co/api/v2/'

    const response = await new PokemonApi().fetch()

    const pokemon = response[0]

    expect(response).not.toBeNull()

    if (response.length) {
      expect(pokemon).toHaveProperty('url')
      expect(pokemon).toHaveProperty('name')
    }
  })

  it('Must return a pokemon response with id, name, stats and types', async () => {
    process.env.NEXT_PUBLIC_BACKEND_API = 'https://pokeapi.co/api/v2/'

    const response = await new PokemonApi().fetchOne(1)

    expect(response).not.toBeNull()
    expect(response).toHaveProperty('id')
    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('stats')
    expect(response).toHaveProperty('types')
  })
})

describe('PokemonApiMock', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()

    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  it('Must return a pokemon in list response with url and name', async () => {
    const response = await new PokemonApiMock().fetch()

    const pokemon = response[0]

    expect(response).not.toBeNull()

    if (response.length) {
      expect(pokemon).toHaveProperty('url')
      expect(pokemon).toHaveProperty('name')
    }
  })

  it('Must return a pokemon response with id, name, stats and types', async () => {
    const response = await new PokemonApiMock().fetchOne(1)

    expect(response).not.toBeNull()
    expect(response).toHaveProperty('id')
    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('stats')
    expect(response).toHaveProperty('types')
  })
})
