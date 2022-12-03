import { useMaleStore } from '../../store'
import ChatContainer from '../container/ChatContainer'
import ChatWrapper from '../container/ChatWrapper'

export type ThreeProps = {}

export default function Three({}: ThreeProps) {
  const { setMaleData } = useMaleStore()

  return (
    <ChatWrapper>
      <ChatContainer>
        <h2>
          We would like to show you a number of frank and close up photos of
          some conditions to see if they look similar to your symptoms.
        </h2>
        <h2>These photos show parts of male genitals</h2>
        <h3>Are you happy to proceed?</h3>
      </ChatContainer>
      <ChatContainer type='answer'>
        <div className='grid gap-3'>
          <div className='flex gap-2 items-center'>
            <input
              id='no'
              type='radio'
              name='photos-permission'
              className='radio'
              value={0}
              onChange={(e) =>
                setMaleData({
                  photosPermission: Boolean(parseInt(e.target.value)),
                })
              }
            />
            <label htmlFor='no'>No</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              id='yes'
              type='radio'
              name='photos-permission'
              className='radio'
              value={1}
              onChange={(e) =>
                setMaleData({
                  photosPermission: Boolean(parseInt(e.target.value)),
                })
              }
            />
            <label htmlFor='yes'>Yes</label>
          </div>
        </div>
      </ChatContainer>
    </ChatWrapper>
  )
}
