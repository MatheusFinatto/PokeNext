import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      className={`flex items-center justify-between bg-blue-950 text-white white py-10  px-2 sm:px-10 `}
    >
      <Link
        href="/"
        className={` flex items-center justify-between w-52 text-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300`}
      >
        <Image
          src={"/images/pokeball.png"}
          width={50}
          alt="pokeball"
          height={50}
        />
        <h1>PokeNext</h1>
      </Link>

      <ul className={`flex  w-1/2 sm:w-1/4 justify-evenly text-lg`}>
        <Link
          href="/"
          className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300`}
        >
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
