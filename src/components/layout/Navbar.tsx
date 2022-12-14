import Loader from '../../assets/svg/Loader'
import { useMaleStore } from '../../store'

export type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  const { aiRunning } = useMaleStore()

  return (
    <>
      <nav className='fixed top-0 z-10 bg-blue-600 max-w-md w-full shadow p-4 flex items-center space-x-2 mb-12'>
        {aiRunning ? (
          <div className='h-10 w-10'>
            <Loader />
          </div>
        ) : (
          <div className='bg-white h-10 text-blue-600 font-bold w-10 rounded-full shadow flex items-center justify-center'>
            <span>H</span>
          </div>
        )}
        <span className='text-white'>Helfie Assistant</span>
      </nav>
    </>
  )
}
