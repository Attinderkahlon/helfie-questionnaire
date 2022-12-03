import { ChangeEventHandler } from 'react'

import ChatContainer from '../container/ChatContainer'
import ChatWrapper from '../container/ChatWrapper'

export type MaleFemaleProps = {
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function MaleFemale({ onChange }: MaleFemaleProps) {
  return (
    <ChatWrapper>
      <ChatContainer>
        <h1>What is your gender?</h1>
      </ChatContainer>
      <ChatContainer type="answer">
        <div className="grid gap-3">
          <div className="flex gap-2 items-center">
            <input
              id="male"
              type="radio"
              name="gender"
              className="radio"
              value="male"
              onChange={onChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              id="female"
              type="radio"
              name="gender"
              className="radio"
              value="female"
              onChange={onChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </ChatContainer>
    </ChatWrapper>
  )
}
