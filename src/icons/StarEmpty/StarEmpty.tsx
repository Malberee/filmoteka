import React, { FC } from 'react'
import { StarEmptyWrapper } from './StarEmpty.styled'
import { StarEmptyProps } from './StarEmpty.types'

const StarEmpty: FC<StarEmptyProps> = () => {
  return (
    <svg
      width="auto"
      height="auto"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6.5H9.625L8 1.5L6.375 6.5H1L5.375 9.5L3.6875 14.5L8 11.375L12.3125 14.5L10.625 9.5L15 6.5Z"
        stroke="url(#paint0_linear_148_6946)"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_148_6946"
          x1="2.71002"
          y1="2.42889"
          x2="11.9805"
          y2="14.8555"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F84119" />
          <stop offset="1" stopColor="#F89F19" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default StarEmpty
