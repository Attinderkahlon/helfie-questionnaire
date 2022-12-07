import { useState } from 'react'

import Home from './components/layout/Home'
import LandingPage from './components/layout/LandingPage'
import Navbar from './components/layout/Navbar'

export default function App() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false)

  return (
    <div className='max-w-md mx-auto bg-black min-h-screen grid'>
      <Navbar />
      {!openBottomSheet && <Home />}

      <div
        className={`bg-gray-50 transition-all duration-500 mt-auto  ${
          openBottomSheet
            ? 'h-full'
            : 'h-16 flex rounded-t-xl items-center justify-center'
        }`}
        onClick={() => setOpenBottomSheet(true)}
      >
        {!openBottomSheet && (
          <span className='text-blue-600 font-bold text-xl'>Check Now</span>
        )}
        {openBottomSheet && <LandingPage />}
      </div>
    </div>
  )
}
