import '@testing-library/jest-dom';
import PokemonService from '../../services/implementation/PokemonService';

describe('PokemonService', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  it('Must return a list of PokemonInList with id and name', async () => {
    const result = await new PokemonService().fetch()

    const { data, error } = result

    expect(data).not.toBeNull()
    expect(error).toBeUndefined()

    const item = data[0]

    expect(item).not.toBeNull()
    expect(item).toHaveProperty('id')
    expect(item).toHaveProperty('name')
    expect(item).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String)
    }))
  })
})
