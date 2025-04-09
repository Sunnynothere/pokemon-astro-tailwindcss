// src/types/pokemon.ts
export interface PokemonType {
  type: {
    name: string;
  }
}

export interface PokemonBasic {
  name: string;
  url: string;
}

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  speed?: number;
  height?: number;
  weight?: number;
}

export interface PokemonDetails extends PokemonBasic {
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

export interface Database {
  results: PokemonBasic[];
}