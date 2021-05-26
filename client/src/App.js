import React, { useEffect } from 'react'
import AppRouter from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { useCheckAuth } from './Graphql/Mutations/User'
import 'antd/dist/antd.css'
import Loader from './Components/Loader'
import { useSelector } from 'react-redux'

const App = () => {
  const isAuth = useSelector((state) => state.user.token)
  const { loading, checkLoggedIn } = useCheckAuth()

  useEffect(() => {
    if (isAuth) {
      checkLoggedIn()
    }
    // window.addEventListener('unload', StoreState)
  }, [checkLoggedIn])
  if (loading) {
    return <Loader />
  }
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
