import { useMaleStore } from '../../../store'
import ChatContainer from '../../container/ChatContainer'
import ChatWrapper from '../../container/ChatWrapper'

export type SymptomsProps = {}

export default function Symptoms({}: SymptomsProps) {
  const { setMaleData } = useMaleStore()

  return (
    <ChatWrapper>
      <ChatContainer>
        <h2> Do you have any symptoms on any of these locations today?</h2>
        <ul className='list-disc p-3 [&>li]:ml-2'>
          <li>In your groin</li>
          <li>On your penis</li>
          <li>At the eye of your penis</li>
          <li>On your testicles or scrotum</li>
          <li>Around your bottom or anus</li>
        </ul>
      </ChatContainer>
      <ChatContainer type='answer'>
        <div className='grid gap-3'>
          <div className='flex gap-2 items-center'>
            <input
              type='radio'
              id='no'
              name='symptoms'
              value={0}
              className='radio'
              onChange={(e) =>
                setMaleData({ symptoms: Boolean(parseInt(e.target.value)) })
              }
            />
            <label htmlFor='no'>No</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              type='radio'
              id='yes'
              name='symptoms'
              value={1}
              className='radio'
              onChange={(e) =>
                setMaleData({ symptoms: Boolean(parseInt(e.target.value)) })
              }
            />
            <label htmlFor='yes'>Yes</label>
          </div>
        </div>
      </ChatContainer>
    </ChatWrapper>
  )
}
