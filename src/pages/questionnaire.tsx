import { useEffect } from 'react'

import Gender from '../components/questions/Gender'
import ConditionOne from '../components/questions/maleQuestions/ConditionOne'
import ConditionTwo from '../components/questions/maleQuestions/ConditionTwo'
import PhotosConsent from '../components/questions/maleQuestions/PhotosConsent'
import Symptoms from '../components/questions/maleQuestions/Symptoms'
import SymptomsLocation from '../components/questions/maleQuestions/SymptomsLocation'
import SymptomsOne from '../components/questions/maleQuestions/SymptomsOne'
import SymptomsType from '../components/questions/maleQuestions/SymptomsType'
import SelfDiagnose from '../components/questions/SelfDiagnose'
import { useMaleStore } from '../store'

export type QuestionnaireProps = {}

export default function Questionnaire({}: QuestionnaireProps) {
  const { maleData } = useMaleStore()

  console.log(maleData)
  console.log(Math.round(Math.random() * (2000 - 1000)) + 1000)

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }, [maleData])

  return (
    <div className='px-3 py-12'>
      <Gender />

      {maleData.gender === 'male' && <Symptoms />}
      {maleData.symptoms && <SelfDiagnose />}
      {maleData.selfDiagnose && <SymptomsType />}
      {maleData.symptomsType && <SymptomsLocation />}
      {maleData.symptomsLocation && <PhotosConsent />}
      {maleData.photosConsent && <ConditionOne />}
      {maleData.conditionOne && <ConditionTwo />}
      {maleData.conditionTwo && <SymptomsOne />}
    </div>
  )
}
