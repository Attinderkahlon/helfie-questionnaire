export type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className='fixed top-0 z-10 bg-blue-600 max-w-sm w-full shadow p-3 flex items-center space-x-2'>
      <div className='bg-white h-10 text-blue-600 font-bold w-10 rounded-full shadow flex items-center justify-center'>
        <span>H</span>
      </div>
      <span className='text-white'>Helfie Assistant</span>
    </nav>
  )
}
