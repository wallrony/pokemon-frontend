import React from 'react';
import ReactDOM from 'react-dom'
import { act } from '@testing-library/react'
import { PokemonContext } from '../../../ui/contexts/PokemonContext'
import PokemonConsumerTest from '../../../ui/components/tests/PokemonConsumerTest';

import '@testing-library/jest-dom';
import PokemonService from '../../../services/implementation/PokemonService';

let container: HTMLElement;

describe('PokemonContext', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('To dont have data', async () => {
    act(() => {
      ReactDOM.render(
        <PokemonContext.Provider
          value={{
            data: undefined,
            fetch: () => { }
          }}
        >
          <PokemonConsumerTest loadData></PokemonConsumerTest>
        </PokemonContext.Provider>,
        container
      );
    })

    const element1 = container.getElementsByClassName('element1')[0] as HTMLParagraphElement
    const element2 = container.getElementsByClassName('element2')[0] as HTMLParagraphElement

    expect(element1.innerHTML).toEqual('A lista de pokemons foi definida? Não')
    expect(element2.innerHTML).toEqual('Quantidade de pokemons: 0')
  })

  it('To have data', async () => {
    const result = await new PokemonService().fetch()

    act(() => {
      ReactDOM.render(
        <PokemonContext.Provider
          value={{
            data: result.data,
            fetch: () => { }
          }}
        >
          <PokemonConsumerTest loadData></PokemonConsumerTest>
        </PokemonContext.Provider>,
        container
      );
    })

    const element1 = container.getElementsByClassName('element1')[0] as HTMLParagraphElement
    const element2 = container.getElementsByClassName('element2')[0] as HTMLParagraphElement

    expect(element1.innerHTML).toEqual('A lista de pokemons foi definida? Sim')
    expect(element2.innerHTML).toEqual('Quantidade de pokemons: 20')
  })
})
