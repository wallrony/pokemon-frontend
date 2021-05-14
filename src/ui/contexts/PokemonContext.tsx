import { createContext, ReactNode, useState } from 'react';
import PokemonInList from '../../core/domain/models/PokemonInList';
import ServiceResponse from '../../core/domain/models/ServiceResponse';
import PokemonService from '../../services/implementation/PokemonService';

interface PokemonContextProps {
  data: PokemonInList[] | undefined;
  fetch: () => void;
}

interface PokemonProviderProps {
  children: ReactNode;
}

const PokemonContext = createContext({} as PokemonContextProps);

function PokemonProvider({ children }: PokemonProviderProps) {
  const [data, setData] = useState<PokemonInList[]>(undefined)

  async function fetchData() {
    const data = await new PokemonService().fetch()

    treatFetch(data)
  }

  function treatFetch(response: ServiceResponse<PokemonInList[]>) {
    if (response.data) {
      setData(response.data)
    }
    else if (response.error) { }
  }

  return (
    <PokemonContext.Provider value={{
      data,
      fetch: fetchData
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider

export {
  PokemonContext
}

