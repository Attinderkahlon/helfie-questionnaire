import { useMaleStore } from '../../store'
import ChatContainer from '../container/ChatContainer'
import ChatWrapper from '../container/ChatWrapper'

export type SurveyProps = {}

export default function Survey({}: SurveyProps) {
  const { setMaleData } = useMaleStore()

  return (
    <ChatWrapper>
      <ChatContainer>
        <h2>
          We would like your help with a self-diagnosis website we are
          developing for the general public?
        </h2>
        <h3>Please complete a 5 minute online questionnaire:</h3>
        <ul className='list-disc p-3 [&>li]:ml-2'>
          <li>
            Your position in the queue or your waiting time will not be affected
          </li>
          <li>
            Your care with us will not alter whether you participate or not
          </li>
          <li>Your responses will not appear in your medical record</li>
          <li>A curtain is provided for your privacy</li>
          <li>
            Please note you will not get a result from this questionnaire today
          </li>
          <li>For more information please take the "What is it" brochure</li>
        </ul>
      </ChatContainer>
      <ChatContainer type='answer'>
        <div className='grid gap-3'>
          <div className='flex gap-2 items-center'>
            <input
              id='no-survey'
              type='radio'
              name='survey'
              className='radio'
              value={0}
              onChange={(e) =>
                setMaleData({ survey: Boolean(parseInt(e.target.value)) })
              }
            />
            <label htmlFor='no-survey'>No</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              id='yes-survey'
              type='radio'
              name='survey'
              className='radio'
              value={1}
              onChange={(e) =>
                setMaleData({ survey: Boolean(parseInt(e.target.value)) })
              }
            />
            <label htmlFor='yes-survey'>Yes</label>
          </div>
        </div>
      </ChatContainer>
    </ChatWrapper>
  )
}
