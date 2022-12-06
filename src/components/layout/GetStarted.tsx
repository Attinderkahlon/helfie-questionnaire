import { useState } from 'react'

import back from '../../assets/images/verify-mobile/back.svg'
import Lock from '../../assets/svg/Lock'
import { countries } from '../../utils/countries'
import Otp from './Otp'

type GetStartedProps = {}

export default function GetStarted({}: GetStartedProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState(false)
  const [isValidate, setIsValidate] = useState(false)

  const regex = new RegExp(/^[0-9]{10}$/)
  const validate = () => {
    if (!regex.test(phoneNumber)) {
      setError(true)
      setIsValidate(false)
    } else {
      setError(false)
      setIsValidate(true)
    }
  }

  return (
    <div className='mt-32 p-6 text-gray-800'>
      {!isValidate && (
        <>
          {' '}
          <img src={back} alt='back' width='41' height='41' />
          <h1 className='font-bold text-2xl mt-4 '>Hello</h1>
          <p className='font-medium  text-xl'>
            The quickest and easiest way to get you a check is with your mobile
            number.
          </p>
          <p className='text-xl mt-6'>
            We will send you a verification code to your mobile number.
          </p>
          <div className='mt-6 '>
            <label htmlFor='countrySelect' className='text-lg'>
              Country Select
            </label>

            <select
              name='countrySelect'
              className='w-full mt-2 p-2 border border-gray-300 rounded-md bg-slate-200 text-dark-700'
            >
              {countries.map((country) => (
                <option
                  value={country.dialCode}
                  key={country.code}
                  defaultValue={countries[12].name}
                >
                  {country.dialCode + ' '}
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className='text-lg mt-4'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              placeholder='Enter phone number'
              type='number'
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value)
                setError(false)
              }}
              name='phoneNumber'
              className='w-full h- mt-2 p-2 border border-gray-300 rounded-md bg-slate-200 text-dark-700 '
            />
          </div>
          {error && (
            <p className=' text-red-500'>Your Phone number is invalid</p>
          )}
          <div className='mt-6 grid gap-2 grid-flow-col '>
            <Lock />
            <label className='mb-0'>
              We will never spam you or share your mobile number or any health
              related data with anyone
            </label>
          </div>
          <div className='mt-12'>
            <button
              className='bg-blue-600 text-white w-full p-2 rounded-md font-bold'
              type='button'
              onClick={validate}
            >
              Get secure code
            </button>
          </div>
        </>
      )}
      {isValidate && <Otp />}
    </div>
  )
}
