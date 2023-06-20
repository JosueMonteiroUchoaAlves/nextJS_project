import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-slate-600 to-white">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Calculator</h1>
      <div>
          <a href='/Sum' className="link">Sum</a>
          <a href='/Subtraction' className="link">Subtraction</a>
          <a href='/Multiply' className="link">Multiply</a>
          <a href='/Division' className="link">Division</a>
      </div>
    </main>
  )
}   
