export type MaleData = {
  gender?: string
  symptoms?: boolean
  selfDiagnose?: boolean
  symptomsType?: string | boolean
  symptomsLocation?: string
  photosConsent?: boolean
  conditionOne?: string
  conditionTwo?: string
  symptomsOne?: string
  symptomsTwo?: string
  symptomsThree?: string
  symptomsFour?: string
  symptomsFive?: string
  symptomsSix?: string
  symptomsSeven?: string
  symptomsEight?: string
  symptomsNine?: string
  sorePain?: string
  symptomsTen?: string
  discharge?: string
  symptomsEleven?: string
  pain?: string
  painTwo?: number
  duration?: number
  completion?: string
}

//create sample data for MaleData type
// const sampleMaleData: MaleData = {
//   survey: true,
//   photosPermission: true,
//   photosSymptoms: 'https://www.google.com',
//   symptoms: [1, 2, 3],
//   location: true,
//   happy: true,
//   condition: 1,
//   blisters: 1,
//   discharge: 1,
//   pain: 1,
// }
