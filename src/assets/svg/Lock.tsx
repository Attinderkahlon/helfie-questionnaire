import { SVGProps } from 'react'

const Lock = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='6'
        y='10'
        width='12'
        height='10'
        rx='1'
        stroke='#1C4FE3'
        strokeWidth='2'
      />
      <path
        d='M16 10V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V10'
        stroke='#1C4FE3'
        strokeWidth='2'
      />
      <circle cx='12' cy='15' r='1' fill='#1C4FE3' />
    </svg>
  )
}
export default Lock
