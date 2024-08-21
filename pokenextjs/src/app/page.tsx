import Image from "next/image";

import Cards from '@/components/cards/Index';

import { pokeball } from "../../public/assets/img";

const page = async () => {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon';

  const res = await fetch(`${api}/?limit=${maxPokemons}`, { next: {revalidate: 7200}});
  const pokemons = await res.json();

  pokemons.results.forEach((item: any, index: any) => {
    item.id = index + 1
  })

  return (
    <section>
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center gap-4 mx-auto text-center">
          <h2 className="text-red-600 font-bold text-5xl text-center">Poke<span className="text-white">NextJS</span></h2>
          <Image
            src={pokeball}
            width={50}
            height={50}
            alt=""
          />
        </div>

        <ul className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
          {pokemons.results.map((pokemon: any) => (
            <Cards key={pokemon.id} pokemon={pokemon}/>
            // <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page