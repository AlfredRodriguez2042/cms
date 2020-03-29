import React, { useEffect } from 'react'
import AppRouter from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from './Layout'
import 'antd/dist/antd.css'

const App = () => {
  useEffect(() => {
    // window.addEventListener('unload', StoreState)
  }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <AppRouter />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
