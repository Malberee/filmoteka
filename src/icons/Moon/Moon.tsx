import React, { FC } from 'react'
import { MoonWrapper } from './Moon.styled'
import { MoonProps } from './Moon.types'

const Moon: FC<MoonProps> = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.02604 7.77441C1.26766 11.1211 4.20061 13.8439 7.71076 13.9933C10.1873 14.0973 12.4021 12.9796 13.731 11.2185C14.2814 10.4972 13.9861 10.0163 13.0666 10.1788C12.6169 10.2568 12.1538 10.2893 11.6706 10.2698C8.38862 10.1398 5.704 7.48199 5.69058 4.34329C5.68386 3.49851 5.86508 2.69921 6.19394 1.9714C6.55637 1.16561 6.12012 0.782204 5.28117 1.12662C2.62339 2.21184 0.80456 4.80467 1.02604 7.77441Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Moon
