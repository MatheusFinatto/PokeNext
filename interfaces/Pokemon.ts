interface Item {
  slot: number;
  type: { name: string; url: string };
}

interface Pokemon {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  types: Item[];
}

interface PokemonProps {
  pokemon: Pokemon;
}

interface PokemonsProps {
  pokemons: Pokemon[];
}
