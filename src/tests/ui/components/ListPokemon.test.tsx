import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ListPokemon from '../../../ui/components/ListPokemon';
import { PokemonContext } from '../../../ui/contexts/PokemonContext';
import PokemonService from '../../../services/implementation/PokemonService';

describe('ListPokemon', () => {

  it('show data in the view', async () => {
    const result = await new PokemonService().fetch()

    const screen = render(
        <PokemonContext.Provider
          value={{
            data: result.data,
            fetch: () => {}
          }}
        >
          <ListPokemon />
        </PokemonContext.Provider>
    )
      
    const list = screen.getByText('', { selector: 'ul' })

    expect(list).toBeInTheDocument()
  })

  it('show the loading page waiting for a list of pokemon', () => {
    const screen = render(<ListPokemon />)

    const loadingPage = screen.getByText(
      'Carregando lista de pokemons...', 
      { selector: 'p' }
    )

    expect(loadingPage).toBeInTheDocument()
  })
})