import { lazy } from 'react'
import SingleArticle from '../Components/Articles/SingleArticle'
import AdminLayout from '../Layout/Admin'
import PublicLayout from '../Layout/Public'
const Home = lazy(() => import('../Pages/Home'))
const ConfirmEmail = lazy(() => import('../Pages/Email'))
const About = lazy(() => import('../Pages/About'))
const Articles = lazy(() => import('../Pages/Articles'))
const Policy = lazy(() => import('../Pages/Policy'))
const Page404 = lazy(() => import('../Pages/Page404'))

// Admin
const Admin = lazy(() => import('../Pages/Admin'))
const User = lazy(() => import('../Pages/User'))
const Dashboard = lazy(() => import('../Pages/Admin/Dashboard'))

const PublicRoute = {
  path: '/',
  name: 'home',
  component: PublicLayout,
  childRoutes: [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/about',
      exact: true,
      component: About,
    },
    {
      path: '/articles',
      exact: true,
      component: Articles,
    },
    {
      path: '/articles/:id',
      exact: true,
      component: SingleArticle,
    },
    {
      path: '/privacy-policy/',
      exact: true,
      component: Policy,
    },
    {
      path: '/confirm/email',
      exact: true,
      component: ConfirmEmail,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
}

const AdminRoute = {
  path: '/admin',
  name: 'home',
  component: AdminLayout,
  childRoutes: [
    {
      path: '/article/edit',
      exact: true,
      component: Admin,
    },
    {
      path: '/dashboard',
      exact: true,
      component: Dashboard,
    },
    {
      path: '/user',
      exact: true,
      component: User,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
}
const UserRoute = {
  path: '/app',
  name: 'home',
  component: AdminLayout,
  childRoutes: [
    {
      path: 'edit',
      exact: true,
      component: Admin,
    },
    {
      path: '/dashboard',
      exact: true,
      component: Dashboard,
    },
  ],
}

export const routes = [AdminRoute, PublicRoute]
