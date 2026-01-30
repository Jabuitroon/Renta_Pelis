'use-client'
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
    <Card className='flex-row gap-0'>
      <CardHeader className='w-32'>
        <img src={movie.Poster} alt={movie.Title} className='rounded mx-auto' />
      </CardHeader>
      <CardContent className='w-2/3 p-0'>
        <CardTitle className='text-xl'>{movie.Title}</CardTitle>
        <CardDescription>{movie.Year}</CardDescription>
        <CardAction>${movie.price.amount}</CardAction>
      </CardContent>
        <IoCloseCircleOutline className='w-6 h-6'/>
    </Card>
  )
}
