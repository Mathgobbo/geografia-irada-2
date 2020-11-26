import Link from 'next/link'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav className="absolute w-full sm:px-8 " >
      <ul className="relative w-full flex items-center justify-between p-4 sm:p-8">
        <li className="flex" >
          <Link href="/">
            <a className="no-underline text-accent-1 font-bold flex flex-col">
              <span className="text-white sm:text-gray-600 text-2xl sm:text-3xl">Geografia Irada</span>
              <span className="text-gray-100 sm:text-gray-500 italic  text-sm md:text-x1" >Qualidade com criatividade</span>
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          <li>
            <button className="transition px-2 md:px-7 py-2 text-sm md:text-base bg-gradient-to-l from-blue-700 to-blue-400 rounded-md text-white font-bold cursor-pointer border-b-4 border-blue-900 transform hover:translate-y-1 hover:border-opacity-0 hover:from-blue-600 hover:to-blue-300" >Acessar Plataforma</button>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
