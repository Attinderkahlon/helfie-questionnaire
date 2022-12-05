import one from '../../../assets/images/1.jpg'
import two from '../../../assets/images/2.jpg'
import three from '../../../assets/images/3.jpg'
import four from '../../../assets/images/4.jpg'
import { useMaleStore } from '../../../store'
import ChatContainer from '../../container/ChatContainer'
import ChatWrapper from '../../container/ChatWrapper'

export type ConditionOneProps = {}

export default function ConditionOne({}: ConditionOneProps) {
  const { setMaleData } = useMaleStore()

  return (
    <ChatWrapper>
      <ChatContainer>
        <h2>
          Please pick the picture that is most similar to your condition and
          answer the question below:
        </h2>
      </ChatContainer>
      <ChatContainer type='answer'>
        <div className='grid grid-cols-2 gap-x-0 gap-y-6 p-0 m-0'>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='1'
              onChange={(e) =>
                setMaleData({
                  conditionOne: e.target.value,
                })
              }
            />
            <img
              className=' w-32 h-24 rounded-lg cursor-pointer'
              src={one}
              alt='1'
            />
          </label>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='2'
              onChange={(e) =>
                setMaleData({
                  conditionOne: e.target.value,
                })
              }
            />
            <img
              className='w-32 h-24 rounded-lg cursor-pointer '
              src={two}
              alt='2'
            />
          </label>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='3'
              onChange={(e) =>
                setMaleData({
                  conditionOne: e.target.value,
                })
              }
            />
            <img
              className='w-32 h-24 rounded-lg cursor-pointer '
              src={three}
              alt='3'
            />
          </label>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='4'
              onChange={(e) =>
                setMaleData({
                  conditionOne: e.target.value,
                })
              }
            />
            <img
              className='w-32 h-24 rounded-lg cursor-pointer '
              src={four}
              alt='4'
            />
          </label>
        </div>
      </ChatContainer>
    </ChatWrapper>
  )
}
