import { useEffect, useState } from 'react'

import ai from '../../assets/images/ai.png'

export type HomeProps = {}

export default function Home({}: HomeProps) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)

  const text = [
    'Hi there, I am Helfie STI-AI.',
    'I am here to help you.',
    'I will ask few questions for screening.',
    'I was created by leading doctors and scientists, to help you with your health.',
  ]

  useEffect(() => {
    const id = setTimeout(
      () => setCurrentItemIndex((currentItemIndex + 1) % text.length),
      2000
    )
    return () => {
      clearInterval(id) // removes React warning when gets unmounted
    }
  }, [currentItemIndex])

  return (
    <div>
      <div className='flex justify-center mt-96 '>
        <img className='animate-spin-slow ' src={ai} alt='ai' />
        <p className='animate-fade-in-down text-slate-200 font-medium flex flex-wrap items-center justify-center'>
          {text[currentItemIndex]}
        </p>
      </div>
    </div>
  )
}
