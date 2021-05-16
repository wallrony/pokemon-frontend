import PokemonProvider from '../ui/contexts/PokemonContext';

import '../ui/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return( 
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  )
}

export default MyApp
