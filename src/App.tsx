import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Questionnaire from './pages/questionnaire'

export default function App() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false)

  return (
    <div className='max-w-md mx-auto min-h-screen grid'>
      <Navbar />
      <div
        className={`bg-gray-50 transition-all duration-300 mt-auto  ${
          openBottomSheet
            ? 'h-full'
            : 'h-16 flex rounded-t-xl items-center justify-center'
        }`}
        onClick={() => setOpenBottomSheet(true)}
      >
        {!openBottomSheet && <span className='text-blue-600'>Check Now</span>}
        {openBottomSheet && <Questionnaire />}
      </div>
    </div>
  )
}
