import { createContext, useState } from 'react'

export const Context = createContext({
  local_A: {},
  local_B: {},
  step: 1,
  setStep: () => {},
  goPrevious: () => {},
  goNext: () => {},
  mounted: false,
  setMounted: () => {},
})

export default function ContextProvider({ children }) {
  // loc_A === location A
  const [mounted, setMounted] = useState(false)
  const [locA_houseElevator, setLocA_houseElevator] = useState(false)
  const [locA_appartElevator, setLocA_appartElevator] = useState(false)
  const [locaA_houseType, setLocaA_houseType] = useState(true)

  const [locB_houseElevator, setLocB_houseElevator] = useState(false)
  const [locB_appartElevator, setLocB_appartElevator] = useState(false)
  const [locaB_houseType, setLocB_houseType] = useState(true)

  // global step
  const [step, setStep] = useState(1)
  const goPrevious = () => {
    setStep((prev) => prev - 1)
  }
  const goNext = (e) => {
    setStep((prev) => prev + 1)
  }

  const local_A = {
    locA_houseElevator,
    setLocA_houseElevator,
    locA_appartElevator,
    setLocA_appartElevator,
    locaA_houseType,
    setLocaA_houseType,
  }
  const local_B = {
    locB_houseElevator,
    setLocB_houseElevator,
    locB_appartElevator,
    setLocB_appartElevator,
    locaB_houseType,
    setLocB_houseType,
  }
  return (
    <Context.Provider
      value={{
        local_A,
        local_B,
        goNext,
        goPrevious,
        step,
        setStep: setStep,
        mounted,
        setMounted,
      }}
    >
      {children}
    </Context.Provider>
  )
}
