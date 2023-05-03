import Card from "@/components/Card";
import Image from "next/image";

export async function getStaticProps() {
  const maxPokemon = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}?limit=${maxPokemon}`);
  const data = await res.json();

  //add pokemon index

  data.results.forEach((item: Pokemon, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

const Home: React.FC<PokemonsProps> = ({ pokemons }) => {
  return (
    <section className=" mb-20 flex items-center justify-center flex-col">
      <div className="flex justify-between items-center text-5xl w-64 m-10">
        <h1>
          Poke<span className="text-red-600">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width={40}
          height={40}
          alt="pokeball"
        ></Image>
      </div>
      <ul className="flex flex-wrap justify-evenly items-center m-0">
        {pokemons.map((pokemon: Pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} />;
        })}
      </ul>
    </section>
  );
};

export default Home;
