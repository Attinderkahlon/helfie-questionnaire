export type LandingPageProps = {}

export default function LandingPage({}: LandingPageProps) {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full'>
        <p className='container text-white text-2xl mb-2 p-2 '>I want to:</p>
        <div className='container flex flex-col space-y-2'>
          <p className='bg-gray-50 p-6 rounded-2xl text-gray-900 text-bold text-2xl'>
            Check for
            <br />
            <span className='text-blue-600 font-bold'>
              sexually transmitted infections
            </span>
            &nbsp; anonymously and instantly
          </p>
          <div className='bg-gray-50 rounded-2xl p-6 text-2xl'>
            <p className='font-bold tracking-tight text-gray-900'>
              Instant assessment using our Ai
            </p>
            <p className='text-gray-700'>
              Helfie uses artificial intelligence to determine what you may have
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
