import { memo } from 'react'
import {
  HeroWrapper,
  MoviePoster,
  HeroInner,
  MovieTitle,
  MovieOverview,
  ButtonsWrapper,
  RatingStars,
  StarWrapper,
} from './Hero.styled'
import { HeroProps } from './Hero.types'
import useAppSelector from 'hooks/useAppSelector'
import Container from 'components/common/Container'
import Button from 'components/Button'
import Star from 'icons/Star'
import StarEmpty from 'icons/StarEmpty'
import Loader from 'components/common/Loader'
import {
  selectIsLoading,
  selectTrendingMovies,
} from 'store/trendingMovies/selectors'

const Hero = memo<HeroProps>(({ openModal }) => {
  const movies = useAppSelector(selectTrendingMovies)
  const isLoading = useAppSelector(selectIsLoading)

  const movie = movies[0]

  return (
    <HeroWrapper>
      {(isLoading && <Loader />) ||
        (movie && (
          <>
            <MoviePoster
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
            <HeroInner>
              <Container>
                <MovieTitle>{movie.title}</MovieTitle>
                <RatingStars
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
                <MovieOverview>
                  {movie.overview.split(' ').slice(0, 25).join(' ')}..
                </MovieOverview>
                <ButtonsWrapper>
                  <Button>Watch trailer</Button>
                  <Button
                    $isBordered
                    $isColorless
                    onClick={() => openModal(movie)}
                  >
                    More details
                  </Button>
                </ButtonsWrapper>
              </Container>
            </HeroInner>
          </>
        ))}
    </HeroWrapper>
  )
})

export default Hero