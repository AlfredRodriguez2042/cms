import React, { Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { routes } from './routes'
import { useSelector } from 'react-redux'
import Loader from 'Components/Loader'

const AppRouter = () => {
  const role = useSelector((state) => state.user.roles)
  console.log(role)
  const isAuth = useSelector((state) => state.user.isAuth)
  const renderRoutes = (routes, contextPath) => {
    const children = []

    const renderRoute = (item, routeContextPath) => {
      let newContextPath = item.path
        ? `${routeContextPath}/${item.path}`
        : routeContextPath
      newContextPath = newContextPath.replace(/\/+/g, '/')
      if (newContextPath.includes('admin') && role !== 'admin') {
        item = {
          ...item,
          component: () => <Redirect to="/" />,
          children: [],
        }
      }
      if (role === 'admin' && item.childRoutes) {
        const childRoutes = renderRoutes(item.childRoutes, newContextPath)
        children.push(
          <Route
            key={newContextPath}
            render={(props) => (
              <item.component {...props}>{childRoutes}</item.component>
            )}
            path={newContextPath}
          />
        )
        item.childRoutes.forEach((r) => renderRoute(r, newContextPath))
      }
      if (newContextPath.includes('app') && !isAuth) {
        item = {
          ...item,
          component: () => <Redirect to="/" />,
          children: [],
        }
      }
      //   if (!item.component) return

      if (item.childRoutes) {
        const childRoutes = renderRoutes(item.childRoutes, newContextPath)
        children.push(
          <Route
            key={newContextPath}
            render={(props) => (
              <item.component {...props}>{childRoutes}</item.component>
            )}
            path={newContextPath}
          />
        )
        item.childRoutes.forEach((r) => renderRoute(r, newContextPath))
      } else {
        children.push(
          <Route
            key={newContextPath}
            component={item.component}
            path={newContextPath}
            exact
          />
        )
      }
    }
    routes.forEach((item) => renderRoute(item, contextPath))
    return <Switch>{children}</Switch>
  }
  const Routes = renderRoutes(routes, '/')
  return (
    <Suspense fallback={<Loader />}>
      <Switch>{Routes}</Switch>
    </Suspense>
  )
}
export default AppRouter
