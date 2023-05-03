import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemon = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}?limit=${maxPokemon}`);
  const data = await res.json();
  const results: Pokemon[] = data.results;

  const paths = results.map((pokemon: Pokemon, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: Pokemon = await res.json();

  return {
    props: { pokemon: data },
  };
};

const PokemonData: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center w-full mb-20">
      <h1 className="text-5xl text-transform: capitalize m-10 bg-stone-600 text-white p-5 rounded-lg">
        {pokemon.name}
      </h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
        className="mb-10"
      />
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-2xl mb-2">Número</h3>
        <p className="bg-red-500 text-white text-md mb-1 w-10 text-center rounded text-lg">
          #{pokemon.id}
        </p>
      </div>
      <div className="flex flex-col items-center mb-10 w-full">
        <h3 className="text-2xl mb-2">Tipos</h3>
        <p className="flex w-48 justify-center">
          {pokemon.types.map((item: Item, index: number) => {
            return (
              <span
                key={index}
                className={`type_${item.type.name} text-white px-2 py-1 rounded-md 	text-transform: uppercase border-neutral-300 border-[1px] mx-5`}
              >
                {item.type.name}
              </span>
            );
          })}
        </p>
      </div>
      <section className="flex items-center w-64 justify-evenly">
        <div className="flex flex-col items-center mb-10 border-r-[1px] border-slate-400 w-1/2">
          <h3 className="text-2xl mb-2">Altura</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className="flex flex-col items-center mb-10 w-1/2">
          <h3 className="text-2xl mb-2">Peso</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </section>
    </div>
  );
};

export default PokemonData;
