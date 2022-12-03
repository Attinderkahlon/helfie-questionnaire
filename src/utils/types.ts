export type MaleData = {
  survey?: boolean
  photosPermission?: boolean
  photosSymptoms?: string
  symptoms?: number[] | string | number
  location?: boolean
  happy?: boolean
  condition?: number
  blisters?: number
  discharge?: number
  pain?: number
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
