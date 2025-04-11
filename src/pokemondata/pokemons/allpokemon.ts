// pokemondata/pokemons/allpokemon.ts
import type { PokemonTypeString } from './pokemonTypes';

export interface PokemonBasic {
  name: string;
  url: string;
  types?: PokemonTypeString[];
}

export const getPokemonId = (url: string) => {
  return url.split('/')[6];
};

export const getPokemonImageUrl = (id: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const fetchAllPokemon = async (offset: number, limit: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  return await response.json();
};

export const fetchPokemonDetails = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) throw new Error('Failed to fetch Pokemon details');
  
  const pokemonData = await response.json();
  
  return {
    hp: pokemonData.stats.find((stat: { stat: { name: string } }) => stat.stat.name === 'hp')?.base_stat || 0,
    attack: pokemonData.stats.find((stat: { stat: { name: string } }) => stat.stat.name === 'attack')?.base_stat || 0,
    defense: pokemonData.stats.find((stat: { stat: { name: string } }) => stat.stat.name === 'defense')?.base_stat || 0,
    speed: pokemonData.stats.find((stat: { stat: { name: string } }) => stat.stat.name === 'speed')?.base_stat,
    height: pokemonData.height,
    weight: pokemonData.weight
  };
};