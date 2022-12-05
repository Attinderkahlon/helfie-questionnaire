import { useMaleStore } from '../../../store'
import ChatContainer from '../../container/ChatContainer'
import ChatWrapper from '../../container/ChatWrapper'

export type SymptomsLocationProps = {}

export default function SymptomsLocation({}: SymptomsLocationProps) {
  const { setMaleData } = useMaleStore()

  //select only one radio button
  const handleSelect = (e: any) => {
    const { name, value } = e.target
    setMaleData({ [name]: value })
  }
  return (
    <>
      <ChatWrapper>
        <ChatContainer>
          <h2>Please choose the main location of these symptoms.</h2>
        </ChatContainer>
        <ChatContainer type='answer'>
          <div className='grid gap-3'>
            <div className='flex gap-2 items-center'>
              <ul>
                <li>
                  <input
                    type='radio'
                    id='groin-crease'
                    value='groin-crease'
                    name='symptomsLocation'
                    className='radio'
                    onChange={handleSelect}
                  />
                  <label htmlFor='groin-crease'>Groin crease</label>
                </li>
                <li>
                  <input
                    type='radio'
                    id='testicles'
                    value='testicles'
                    className='radio'
                    onChange={handleSelect}
                    name='symptomsLocation'
                  />
                  <label htmlFor='testicles'>Testicles or scrotum</label>
                </li>

                <li>
                  <input
                    type='radio'
                    id='anus'
                    value='anus'
                    className='radio'
                    onChange={handleSelect}
                    name='symptomsLocation'
                  />
                  <label htmlFor='anus'>Around the bottom or anus</label>
                </li>

                <li>
                  <input
                    type='radio'
                    id='penis-head'
                    value='penis-head'
                    className='radio'
                    onChange={handleSelect}
                    name='symptomsLocation'
                  />
                  <label htmlFor='penis-head'>
                    Head of the penis, inc eye or foreskin
                  </label>
                </li>

                <li>
                  <input
                    type='radio'
                    id='penis-shaft'
                    value='penis-shaft'
                    className='radio'
                    onChange={handleSelect}
                    name='symptomsLocation'
                  />
                  <label htmlFor='penis-shaft'>Shaft of penis</label>
                </li>
              </ul>
            </div>
          </div>
        </ChatContainer>
      </ChatWrapper>
    </>
  )
}
