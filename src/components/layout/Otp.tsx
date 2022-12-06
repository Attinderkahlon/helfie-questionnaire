import React, { useState } from 'react'

import Lock from '../../assets/svg/Lock'
import Questionnaire from '../../pages/questionnaire'

type OtpProps = {}

export default function Otp({}: OtpProps) {
  //create auth context
  // const { authState, authDispatch } = useContext(AuthContext)

  //create state for otp
  const [otp, setOtp] = useState('')
  const [error, setError] = useState(false)
  const [isValidate, setIsValidate] = useState(false)

  //create regex for otp
  const regex = new RegExp(/^[0-9]{6}$/)
  const validate = () => {
    if (!regex.test(otp)) {
      setError(true)
      setIsValidate(false)
    } else {
      setError(false)
      setIsValidate(true)
    }
  }

  return (
    <>
      {!isValidate && (
        <div className='mt-32 p-6 text-gray-800'>
          <h1 className='font-bold text-2xl mt-4 '>Verify Mobile Number</h1>

          <div className='mt-6'>
            <label htmlFor='otp' className='text-lg'>
              OTP
            </label>
            <input
              name='otp'
              placeholder='Enter phone number'
              type='number'
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value)
                setError(false)
              }}
              onBlur={validate}
              className='w-full mt-2 p-2 border border-gray-300 rounded-md bg-slate-200 text-dark-700'
            />
            {error && (
              <p className='text-sm mt-2 text-red-500'>
                Please enter a valid OTP
              </p>
            )}

            <p className='text-sm mt-2 text-gray-500'>
              We have sent you a 6 digit code to your mobile number
            </p>

            <div className='mt-6'>
              <button className='bg-blue-600 text-white w-full py-2 rounded-md'>
                Verify
              </button>

              <button className='bg-gray-200 text-gray-500 w-full py-2 rounded-md mt-2'>
                Resend OTP
              </button>

              <button className='bg-gray-200 text-gray-500 w-full py-2 rounded-md mt-2'>
                Change Number
              </button>

              <button className='bg-gray-200 text-gray-500 w-full py-2 rounded-md mt-2'>
                Cancel
              </button>

              <div className='mt-6 grid gap-2 grid-flow-col '>
                <Lock />
                <label className='mb-0'>
                  We will never spam you or share your mobile number or any
                  health related data with anyone
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {isValidate && <Questionnaire />}
    </>
  )
}
