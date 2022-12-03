import { useEffect, useState } from 'react'

import MaleFemale from '../components/questions/MaleFemale'
import Survey from '../components/questions/Survey'
import Three from '../components/questions/Three'
import { useMaleStore } from '../store'

export type QuestionnaireProps = {}

export default function Questionnaire({}: QuestionnaireProps) {
  const [gender, setGender] = useState('')
  const { maleData } = useMaleStore()

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }, [maleData])

  return (
    <div className='px-3 py-12'>
      <MaleFemale onChange={(e) => setGender(e.currentTarget.value)} />

      {gender === 'male' && <Survey />}

      {maleData.survey !== undefined && <Three />}
    </div>
  )
}
