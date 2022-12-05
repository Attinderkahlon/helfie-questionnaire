import five from '../../../assets/images/5.jpg'
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
          Please look at the picture that is most similar to your condition and
          answer the question below:
        </h2>
        <img
          className='w-32 h-24 rounded-lg cursor-pointer '
          src={five}
          alt='2'
        />
      </ChatContainer>
      <ChatContainer type='answer'>
        <div className='grid grid-cols-2 gap-x-0 gap-y-6 p-0 m-0'>
          <div>
            <input
              type='radio'
              className='radio'
              name='photo'
              id='1'
              value='1'
              onChange={(e) =>
                setMaleData({
                  conditionTwo: e.target.value,
                })
              }
            />
            <label htmlFor='1'>Nothing like this</label>
          </div>
          <div>
            <input
              type='radio'
              className='radio'
              name='photo'
              id='2'
              value='2'
              onChange={(e) =>
                setMaleData({
                  conditionTwo: e.target.value,
                })
              }
            />
            <label htmlFor='2'>A bit like this</label>
          </div>
          <div>
            <input
              type='radio'
              className='radio'
              name='photo'
              id='3'
              value='3'
              onChange={(e) =>
                setMaleData({
                  conditionTwo: e.target.value,
                })
              }
            />
            <label htmlFor='3'>Exactly like this</label>
          </div>
          <div>
            <input
              type='radio'
              className='radio'
              name='photo'
              id='4'
              value='4'
              onChange={(e) =>
                setMaleData({
                  conditionTwo: e.target.value,
                })
              }
            />
            <label htmlFor='4'>Not sure</label>
          </div>
        </div>
      </ChatContainer>
    </ChatWrapper>
  )
}
