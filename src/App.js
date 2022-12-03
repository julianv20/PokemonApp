import { Col, Spin } from 'antd';
import { Searcher } from './components/Searcher';
import './App.css';
import { PokemonList } from './components/PokemonList';
import { useEffect, useState } from 'react';
import { getPokemons, getPokemonsDetails } from './api';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails, setLoading, setPokemons } from './actions';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const pokemonsFiltered = useSelector(
    (state) => state.data.pokemonsFiltered,
    shallowEqual
  );

  const loading = useSelector((state) => state.ui.loading);

  // const loading = false;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemonsFiltered} />
      )}
    </div>
  );
}

export default App;
