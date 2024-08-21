import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Descrição sobre o projeto PokeNextJS',
}


import Image from "next/image"
import { charizard } from "@/../../public/assets/img"
const page = () => {
  return (
    <section>
      <div className="container mx-auto py-4">
        <h1 className="text-gray-200 text-4xl mb-4 text-center">Sobre o projeto</h1>
        <p className="text-gray-200 text-base mb-6 text-center max-w-md mx-auto leading-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptate sit itaque? Consequatur tempora quo eligendi ad, error aliquam. Eos vel, odit omnis eum odio cumque adipisci exercitationem officiis ea!</p>
        <div className="flex justify-center">
          <Image
            src={charizard}
            width={300}
            height={300}
            alt="Charizard"
          />
        </div>
      </div>
    </section>
  )
}

export default page
