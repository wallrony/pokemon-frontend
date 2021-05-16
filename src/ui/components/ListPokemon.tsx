import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

import styles from '../styles/components/ListPokemon.module.css';

function ListPokemon() {

	const context = useContext(PokemonContext)
	  
  useEffect(() => {
    context.fetch()
	}, [])

	return (
		<div className={styles.container}>
			{context.data ? (
        <ul className={styles.listbox}>
          {context.data?.map((pokemon, i) => {
            return ( 
              <li 
                className={styles.pokemon} 
                key={i}
              >
                {pokemon.name}
              </li>
            )
          })}
        </ul>
      ) : (
        <p className={styles.loading}>Carregando lista de pokemons...</p>
      )}
		</div>
	)
}

export default ListPokemon
