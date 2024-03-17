import React, { FC } from 'react'
import {
  MovieWrapper,
  MovieInner,
  StarWrapper,
  InfoWrapper,
  GreyText,
  RatingStar,
} from './Movie.styled'
import { useGenres } from 'hooks/useGenres'
import { MovieProps } from './Movie.types'
import StarEmpty from 'icons/StarEmpty'
import Star from 'icons/Star'

const Movie: FC<MovieProps> = ({ movie }) => {
  const genres = useGenres(movie.genre_ids)

  const year = new Date(movie.release_date).getFullYear()
  const formattedGenres = () => {
    const string = genres.join(', ').slice(0, -1)

    if (string.length >= 18) {
      return string.slice(0, 18) + '...'
    }

    return string
  }

  return (
    <MovieWrapper>
      <a>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />
        <MovieInner>
          <InfoWrapper>
            <p>{movie.title.toUpperCase()} </p>
            <GreyText>
              {formattedGenres()} | {year}
            </GreyText>
          </InfoWrapper>
          <RatingStar
            initialValue={Math.round((movie.vote_average / 2) * 2) / 2}
            readonly
            allowFraction
            fillIcon={
              <StarWrapper>
                <Star />
              </StarWrapper>
            }
            emptyIcon={
              <StarWrapper>
                <StarEmpty />
              </StarWrapper>
            }
          />
        </MovieInner>
      </a>
    </MovieWrapper>
  )
}

export default Movie
