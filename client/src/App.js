import React, { useEffect } from 'react'
import AppRouter from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { useCheckAuth } from './Graphql/Mutations/User'
import Layout from './Layout'
import 'antd/dist/antd.css'
import ErrorBoundary from './Components/ErrorBoundary'
import Loader from './Components/Loader'
import { useSelector } from 'react-redux'

const App = () => {
  const isAuth = useSelector((state) => state.user.token)
  const { loading, checkLoggedIn } = useCheckAuth()

  useEffect(() => {
    if (isAuth) {
      console.log('autenticamndo')
      checkLoggedIn()
    }
    // window.addEventListener('unload', StoreState)
  }, [checkLoggedIn])
  if (loading) {
    return <Loader />
  }
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App
