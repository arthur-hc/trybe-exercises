# UseEffect
Atenção p/ sintaxe
useEffect((CALLBACK) => {
  <!-- CASO TENHA UMA FUNÇÃO ASYNC, DEVE CRIADA SER EXECUTADA AQUI -->
  const getApi = async () => {
    ...processo fetch
    <!-- CASO SEJA SETADO NO ESTADO... -->
    setEstado(resultadoFetch)
  }
  getApi();
}, [PARAMETROS QUE IRÃO DEFINIR O useEffect])

# DidMount com Hooks
//src/componenteUtilizado
import React, { useEffect, useState } from 'react';

function component() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
     const getPokemons = async () => {
      const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=$151';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPokemons(results)
    }

    getPokemons();
  }, []);

  return (resto do componente...)}
<!-- O QUE DEFINE SER DIDMOUNT É O [] VAZIO COMO PARÂMETRO DO useEffect -->

# DidUpdate com Hooks
//src/componenteUtilizado
import React, { useEffect, useState } from 'react';

function component() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
     const getPokemons = async () => {
      const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPokemons(results)
    }

    getPokemons();
  }, [limit]);

  return (resto do componente...,
    <button type="button" onClick={setLimit(limit += 10);}>Buscar +10</button>
  )
}
<!-- TODA VEZ QUE O [limit](ESTADO DO COMPONENTE) for atualizado, useEffect será chamado -->

# willUnmount com Hooks
<!-- BASTA UTILIZAR O RETURN -->

userEffect(() => {
  return () => alert('unmount')
}, [])

<!-- OU... -->

userEffect(() => () => alert('unmount'), [])


# HOOKS PERSONALIZADOS
<!-- AQUI É CRIADO UM HOOK PERSONALIZADO. ELE TERÁ SEU PRÓPRIO ESTADO PARA TRABALHAR. INICIALMENTE, ELES COMEÇAM COMO VAZIOS, MAS PODEM SER ACIONADOS ATRAVÉS DOS "COMANDOS E RESULTADOS" QUE SERÃO EXPORTADOS COM return [abilities, setPokeUrl]. abilities É O RETORNO DA API DEPOIS DE TRATADO E SETADO NO ESTADO. setPokeUrl É O COMANDO QUE AO SER EXPORTADO, PERMITE QUE O COMPONENTE EXTERNO CONTROLE ESSE ESTADO. -->
<!-- ***PS: HOOKS POR CONVENÇÃO SE INICIAM COM use (ex: userAbility)*** -->
// src/hooks/useAbility.js

import { useState, useEffect } from 'react';

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const getAbilities = async () => {
      if (pokeUrl) {
        const { abilities: abilitiesList } = await fetch(pokeUrl)
        .then((data) => data.json());

        // map feito para percorrer a lista de habilidades e retornar o nome das mesmas.
        const result = abilitiesList.map(({ ability: { name } }) => name);

        setAbilities(result);
      }
    };
    getAbilities();
  }, [pokeUrl]);
  
  return [abilities, setPokeUrl]
};

export default useAbility;

<!-- ------------------------------------------------------------------------------------------- -->

// src/App.js/useAbility.js
<!-- REPARE QUE AGORA, AO IMPORTAR useAbility, ESTE COMPONENTE CONSEGUE ACESSO TANTO AS INFORMAÇÕES CONTIDAS NAQUELE COMPONENTE (abilities), QUANTO CONTROLE  DE DETERMINADA CHAVE DO ESTADO (setPokeUrl), QUE SERÁ ATIVADA AO CLICAR EM DETERMINADO POKE E RETORNARÁ AS abilities DO MESMO -->
import React, { useEffect, useState } from 'react';
import useAbility from './hooks/useAbility';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const [abilities, setPokeUrl] = useAbility();

  const handleMorePokemons = () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    const getPokemons = async () => {
     const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
     const { results } = await fetch(endpoint).then((data) => data.json());
     setPokemons(results)
    }

    getPokemons();
  }, [limit]);
 
  return (
    <div>
      <h1>Trybe Go</h1>
      <p>{ abilities.toString() }</p>
      <button type="button" onClick={handleMorePokemons}>Buscar +10</button>
      <ul>
        {
          pokemons.map(({ name, url }) => <li key={name} onClick={() => setPokeUrl(url)} >{name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;