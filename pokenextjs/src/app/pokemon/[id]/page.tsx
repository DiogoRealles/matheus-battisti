import Image from "next/image";

interface pokemonProps {
  params: {
    id: number,
  }
}
const page = async ({ params }: pokemonProps) => {
  const pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${params.id.toString().padStart(3, '0')}.png`;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();

  return (
    <section>
      <div className="container mx-auto py-4 flex flex-col items-center text-center">
        <h1 className="text-5xl capitalize bg-gray-800 text-white p-2 mx-4 max-w-xs">{pokemon.name}</h1>

        <Image
          src={pokeImg}
          width={120}
          height={120}
          alt={pokemon.name}
        />

        <div className="">
          <h3 className="mx-2 my-auto text-lg">Número:</h3>
          <p># {pokemon.id}</p>
        </div>

        <div className="text-white">
          <h3 className="mx-2 my-auto text-lg">Tipo:</h3>
          <div className="flex justify-center gap-4">
            {pokemon.types.map((item: any, index: number) => (
              <span className={`px-2 py-1 border border-white rounded-sm uppercase text-xs`} key={index}>{item.type.name}</span>
            ))}
          </div>
        </div>

        <div className="flex mt-4">
          <div className="border-r border-gray-300">
            <h3 className="mx-2 my-auto text-lg font-semibold">Altura:</h3>
            <p className="text-sm">{pokemon.height * 10} cm</p>
          </div>

          <div className="divide-x-2"></div>

          <div className="">
            <h3 className="mx-2 my-auto text-lg font-semibold">Peso:</h3>
            <p className="text-sm">{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default page
