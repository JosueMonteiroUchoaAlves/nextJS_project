import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Calculator</h1>
      <div className="row">
        <div className="col">
          <Link href='/Sum'>Sum</Link>
        </div>
        <div className="col">
          <Link href='/Subtraction'>Subtraction</Link>
        </div>
        <div className="col">
          <Link href='/Multiply'>Multiply</Link>
        </div>
        <div className="col">
          <Link href='/Division'>Division</Link>
        </div>
      </div>
    </main>
  )
}   
