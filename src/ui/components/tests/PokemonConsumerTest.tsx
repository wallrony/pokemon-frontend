import { useContext, useEffect } from "react"
import { PokemonContext } from "../../contexts/PokemonContext"

interface PokemonConsumerTestProps {
  loadData?: boolean
}

function PokemonConsumerTest({ loadData }: PokemonConsumerTestProps) {
  const context = useContext(PokemonContext)

  useEffect(() => {
    if (loadData) {
      context.fetch()
    }
  }, [])

  return (
    <PokemonContext.Consumer>
      {provider => {
        return (
          <>
            <p className="element1">{`A lista de pokemons foi definida? ${provider.data !== undefined ? 'Sim' : 'Não'}`}</p>
            <p className="element2">{`Quantidade de pokemons: ${provider.data?.length ?? '0'}`}</p>
          </>
        )
      }}
    </PokemonContext.Consumer>
  )
}

export default PokemonConsumerTest
