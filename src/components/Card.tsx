import Image from "next/image";
import Link from "next/link";

const Card: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className="flex justify-center items-center flex-col py-2 px-1 bg-slate-800 m-1 text-white border-red-600 border-2   w-9/12 xl:w-1/4 sm:w-5/12 rounded-3xl mb-10">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={`${pokemon.name}`}
      ></Image>
      <p className="bg-red-500 text-white text-md mb-1 w-10 text-center rounded">
        #{pokemon.id}
      </p>
      <h3 className="first-letter:uppercase text-3xl mb-2">{pokemon.name}</h3>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className="px-1 py-2 text-black bg-slate-400 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300"
      >
        Detalhes
      </Link>
    </div>
  );
};

export default Card;
