import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loader from '../Components/Loader'
import ErrorBoundary from '../Components/ErrorBoundary'
import SingleArticle from '../Components/SingleArticle'

const Home = lazy(() => import('../Pages/Home'))
const About = lazy(() => import('../Pages/About'))
const Articles = lazy(() => import('../Pages/Articles'))
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
          <Route path="/articles" exact component={Articles} />

          <Route path="/article/:id" exact component={SingleArticle} />
          <PrivateRoute path="/article/edit" exact component={Admin} />
          <PrivateRoute path="/article/edit/:id" exact component={Home} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
  )
}
export default AppRouter
