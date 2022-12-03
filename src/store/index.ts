import create from 'zustand'

import { MaleData } from '../utils/types'

type State = {
  maleData: MaleData
  setMaleData: (data: MaleData) => void
  aiRunning: boolean
}

export const useMaleStore = create<State>((set) => ({
  maleData: {},
  setMaleData: (data) => {
    set({ aiRunning: true })
    setTimeout(
      () =>
        set((state) => ({
          aiRunning: false,
          maleData: { ...state.maleData, ...data },
        })),
      2000
    )
  },
  aiRunning: false,
}))
