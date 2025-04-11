// pokemonTypes.ts
export interface PokemonType {
    type: {
      name: string;
    }
  }
  
  export type PokemonTypeString = 
    | 'normal' | 'fire' | 'water' | 'electric' 
    | 'grass' | 'ice' | 'fighting' | 'poison' 
    | 'ground' | 'flying' | 'psychic' | 'bug' 
    | 'rock' | 'ghost' | 'dragon' | 'dark' 
    | 'steel' | 'fairy';
  
  // Color mapping stays with the types
  export const getTypeColor = (type: PokemonTypeString): string => {
    const colors: Record<PokemonTypeString, string> = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-blue-200',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-blue-300',
      psychic: 'bg-pink-500',
      bug: 'bg-green-400',
      rock: 'bg-yellow-800',
      ghost: 'bg-purple-700',
      dragon: 'bg-purple-600',
      dark: 'bg-gray-800',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300'
    };
  
    return colors[type] || 'bg-gray-400';
  };