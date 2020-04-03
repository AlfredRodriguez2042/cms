import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loader from '../Components/Loader'
import ErrorBoundary from '../Components/ErrorBoundary'

const Home = lazy(() => import('../Pages/Home'))
const About = lazy(() => import('../Pages/About'))
const Admin = lazy(() => import('../Pages/Admin'))
const Dashboard = lazy(() => import('../Pages/Admin/Dashboard'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))

const AppRouter = () => {
  return (
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <PrivateRoute path="/article/edit" exact component={Admin} />
          <PrivateRoute path="/article/edit/:id" exact component={Home} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />

          <PrivateRoute path="/programing" exact component={About} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
  )
}
export default AppRouter
