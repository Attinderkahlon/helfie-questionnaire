import { useState } from 'react'

import GetStarted from './GetStarted'

export type LandingPageProps = {}

export default function LandingPage({}: LandingPageProps) {
  const [started, setStarted] = useState(false)

  const handleClick = () => {
    setStarted(true)
  }
  return (
    <>
      {!started && (
        <div className='flex flex-col space-y-2 text-2xl items-center justify-center h-full'>
          <p className='bg-gray-50 p-6 rounded-2xl text-gray-900 text-bold'>
            Check for
            <br />
            <span className='text-blue-600 font-bold'>
              sexually transmitted infections
            </span>
            &nbsp; anonymously and instantly
          </p>
          <div className='bg-gray-50 rounded-2xl p-6 '>
            <p className='font-bold tracking-tight text-gray-900'>
              Instant assessment using our Ai
            </p>
            <p className='text-gray-700 text-xl font-semibold'>
              Helfie uses artificial intelligence to determine what you may have
            </p>
          </div>
          <button
            className='bg-blue-600 text-white w-36 py-2 rounded-md'
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      )}
      {started && <GetStarted />}
    </>
  )
}
