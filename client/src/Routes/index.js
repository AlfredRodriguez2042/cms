import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loader from '../Components/Loader'
import ErrorBoundary from '../Components/ErrorBoundary'
import SingleArticle from '../Components/Articles/SingleArticle'

const Home = lazy(() => import('../Pages/Home'))
const Page404 = lazy(() => import('../Pages/Page404'))
const About = lazy(() => import('../Pages/About'))
const Articles = lazy(() => import('../Pages/Articles'))
const Policy = lazy(() => import('../Pages/Policy'))
const Admin = lazy(() => import('../Pages/Admin'))
const Dashboard = lazy(() => import('../Pages/Admin/Dashboard'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/articles/:id/" exact component={SingleArticle} />
          <Route path="/privacy-policy/" exact component={Policy} />
          <PrivateRoute path="/article/edit" exact component={Admin} />
          <PrivateRoute path="/article/edit/:id" exact component={Home} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <Route path="*" component={Page404} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
}
export default AppRouter
