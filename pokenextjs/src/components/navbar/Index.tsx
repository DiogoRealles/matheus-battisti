import Link from 'next/link'
import Image from 'next/image'

import {
  charizard,
  pokeball
} from '@/../public/assets/img';

const Index = () => {
  return (
    <header className=''>
      <div className="container mx-autocontainer mx-auto py-4 border-b border-gray-300">
        <nav className="flex justify-between items-center">
          <div>
            <Link className="flex items-center gap-2" href="/">
              <Image
                src={pokeball}
                width={30}
                height={30}
                alt="Bem vindos a minha PokeNextJS"
              />
              <h1 className='font-semibold text-lg'>PokeNextJS</h1>
            </Link>
          </div>
          <ul className='flex items-center gap-2'>
            <li><Link className='px-4 py-1 hover:underline underline-offset-4' href="/">Home</Link></li>
            <li><Link className='px-4 py-1 hover:underline underline-offset-4' href="/about">Sobre</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Index
