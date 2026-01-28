import CardItem from '@/components/cart/card-item'
import { Button } from '@/components/ui/button'
import { MovieInCart } from '@/interfaces/movie'
import Link from 'next/link'

export default function CartPage() {
  const mokes: MovieInCart[] = [
    {
      Title: 'Spider-Man: No Way Home',
      Year: '2021',
      imdbID: 'tt10872600',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: 'Home Alone',
      Year: '1990',
      imdbID: 'tt0099785',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzNmNmQ2ZDEtMTc1MS00NjNiLThlMGUtZmQxNTg1Nzg5NWMzXkEyXkFqcGc@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: 'Spider-Man: Far from Home',
      Year: '2019',
      imdbID: 'tt6320628',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: 'Home Alone 2: Lost in New York',
      Year: '1992',
      imdbID: 'tt0104431',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEyYzRmNzYtYzJjZi00ZjhlLWJiNDktYzZhNTgxMzc1NThlXkEyXkFqcGc@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: "Miss Peregrine's Home for Peculiar Children",
      Year: '2016',
      imdbID: 'tt1935859',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: "Daddy's Home",
      Year: '2015',
      imdbID: 'tt1528854',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTQ0OTE1MTk4N15BMl5BanBnXkFtZTgwMDM5OTk5NjE@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: 'Home Alone 3',
      Year: '1997',
      imdbID: 'tt0119303',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmI0MjcxYjYtYzY5Ni00NjBkLTllN2MtZGYyNzJiYzA5ZGYxXkEyXkFqcGc@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: 'Sweet Home Alabama',
      Year: '2002',
      imdbID: 'tt0256415',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjEwMjIwMDQ4OV5BMl5BanBnXkFtZTYwNzc3OTY3._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: 'Home',
      Year: '2015',
      imdbID: 'tt2224026',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjExOTQ4MDMyMV5BMl5BanBnXkFtZTgwMTE3NDM2MzE@._V1_SX300.jpg',
      price: '9990',
    },
    {
      Title: 'Annabelle Comes Home',
      Year: '2019',
      imdbID: 'tt8350360',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjRjYmQ5NTQtYzIyNi00MmNlLTlmNjYtNjQ3NzRlZmY3YjFlXkEyXkFqcGc@._V1_SX300.jpg',
      price: '9990',
    },
  ]

  const totalToPay: number = mokes.reduce(
    (acc, movie) => acc + Number(movie.price),
    0,
  )
  return (
    <main className='flex h-full mx-auto md:w-5xl bg-blue-500 font-sans dark:bg-gray-900'>
      {/* Lista de items a comprar */}
      <div className='overflow-y-auto w-6xl'>
        {mokes.map((movie) => (
          <CardItem key={movie?.imdbID} movie={movie} />
        ))}
      </div>
      {/* Resumen de compra */}
      <aside className='bg-white rounded-xl shadow-2xl p-8 w-full  text-accent-foreground'>
        <h2 className='mb-4 text-2xl font-bold'>Resumen de orden</h2>
        <div className='grid grid-cols-2'>
          <span>N° de items</span>
          <span className='text-right'>{mokes.length}</span>
          <span className='mt-5 text-2xl'>Total:</span>
          <span className='mt-5 text-2xl text-right'>{totalToPay}</span>
        </div>
        <Button asChild className='w-full mt-5 mb-2' size='lg'>
          <Link href='/checkout'>Checkout</Link>
        </Button>
      </aside>
    </main>
  )
}
