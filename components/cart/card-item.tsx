'use-client'
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { MovieInCart } from '@/interfaces/movie'

interface CardItemProps {
  movie: MovieInCart
}

export default function CardItem({ movie }: CardItemProps) {
  return (
    <Card className='flex-row justify-between'>
      <CardHeader className='w-full'>
        <CardTitle>{movie.Title}</CardTitle>
        <CardDescription>{movie.Year}</CardDescription>
        <CardAction>${movie.price}</CardAction>
      </CardHeader>

      <CardContent className=''>
        <img src={movie.Poster} alt={movie.Title} className='w-32 rounded' />
        <IoCloseCircleOutline />
      </CardContent>
    </Card>
  )
}
