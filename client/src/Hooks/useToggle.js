import { useReducer } from 'react'

function useToggle(initialValue = false) {
  return useReducer((state) => !state, initialValue)
}

export default useToggle
