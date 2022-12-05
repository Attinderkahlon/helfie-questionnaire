import { useEffect, useState } from 'react'

import { useMaleStore } from '../../../store'
import ChatContainer from '../../container/ChatContainer'
import ChatWrapper from '../../container/ChatWrapper'

export type SymptomsTypeProps = {}

export default function SymptomsType({}: SymptomsTypeProps) {
  const { setMaleData } = useMaleStore()
  const [checkbox, setCheckbox] = useState({
    Itch: false,
    Rash: false,
    Lumps: false,
    Spots: false,
    Blisters: false,
    none: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox({ ...checkbox, [e.target.name]: e.target.checked })
    setMaleData({ symptomsType: checkbox })
  }
  useEffect(() => {
    if (checkbox.none) {
      setCheckbox({
        Itch: false,
        Rash: false,
        Lumps: false,
        Spots: false,
        Blisters: false,
        none: true,
      })
    } else if (
      checkbox.Itch ||
      checkbox.Rash ||
      checkbox.Lumps ||
      checkbox.Spots ||
      checkbox.Blisters
    ) {
      setCheckbox({ ...checkbox, none: false })
    }
  }, [
    checkbox.Itch,
    checkbox.Rash,
    checkbox.Lumps,
    checkbox.Spots,
    checkbox.Blisters,
    checkbox.none,
  ])

  return (
    <>
      <ChatWrapper>
        <ChatContainer>
          <h2>
            Are you experiencing any of the following symptoms on the skin of
            you genital area as shown in the diagram ?
          </h2>
          <h3>Select all that apply</h3>
        </ChatContainer>
        <ChatContainer type='answer'>
          <div className='grid gap-3'>
            <div className='flex gap-2 items-center'>
              <ul>
                <li>
                  <input
                    type='checkbox'
                    id='itch'
                    name='Itch'
                    value='itch'
                    checked={checkbox.Itch}
                    className='checkbox'
                    onChange={handleChange}
                  />
                  <label htmlFor='itch'>Itch</label>
                </li>
                <li>
                  <input
                    type='checkbox'
                    id='rash'
                    value='rash'
                    checked={checkbox.Rash}
                    className='checkbox'
                    onChange={handleChange}
                    name='Rash'
                  />
                  <label htmlFor='rash'>Rash</label>
                </li>

                <li>
                  <input
                    type='checkbox'
                    id='lumps'
                    value='lumps'
                    checked={checkbox.Lumps}
                    className='checkbox'
                    onChange={handleChange}
                    name='Lumps'
                  />
                  <label htmlFor='lumps'>Lumps</label>
                </li>

                <li>
                  <input
                    type='checkbox'
                    id='spots'
                    value='spots'
                    checked={checkbox.Spots}
                    className='checkbox'
                    onChange={handleChange}
                    name='Spots'
                  />
                  <label htmlFor='spots'>Spots</label>
                </li>

                <li>
                  <input
                    type='checkbox'
                    id='blisters'
                    value='blisters'
                    checked={checkbox.Blisters}
                    className='checkbox'
                    onChange={handleChange}
                    name='Blisters'
                  />
                  <label htmlFor='blisters'>Blisters and/or Sores</label>
                </li>
                <li>
                  <input
                    type='checkbox'
                    id='none'
                    value='none'
                    className='checkbox'
                    checked={checkbox.none}
                    name='none'
                    onChange={handleChange}
                  />
                  <label htmlFor='none'>
                    I do not have any of these symptoms
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </ChatContainer>
      </ChatWrapper>
    </>
  )
}
