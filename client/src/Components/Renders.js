import { useRef } from 'react'
export const CountRender = () => {
  const render = useRef(0)
  console.log('renders : ', render.current++)
}
