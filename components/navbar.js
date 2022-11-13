import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='px-2 sm:px-10 py-2.5 dark:bg-gray-900'>
        <Link href="/">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9"/>
        </Link>
    </nav>
  )
}