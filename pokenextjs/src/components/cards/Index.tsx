import Image from "next/image";
import Link from "next/link";


const Index = ({ pokemon }: any) => {
  const pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, '0')}.png`;

  return (
    <div className="flex items-center justify-center flex-col gap-4 px-8 py-4 mb-8 rounded-md max-w-1/4 border-2 border-red-600 drop-shadow-lg bg-zinc-950 text-gray-200">
      <Image
        src={pokeImg}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className="bg-red-600 rounded p-1 text-gray-200 font-semibold flex items-center justify-center">#{pokemon.id}</p>
      <h3 className="capitalize mb-4 text-lg">{pokemon.name}</h3>
      <Link className="bg-zinc-950 text-gray-200 px-4 py-2 rounded font-bold transition-all duration-300 border border-red-600 hover:bg-red-600 hover:text-gray-200" href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  )
}

export default Index

// https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png