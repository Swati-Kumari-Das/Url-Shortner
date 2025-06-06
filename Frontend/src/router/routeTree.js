import HomePage from '../pages/HomePage.jsx'
import RootLayout from '../RootLayout.jsx'

import {createRootRoute} from '@tanstack/react-router'
import { authRoute } from './auth.route.js'
import { dashboardRoute } from './dashboard.js'
import {homePageRoute} from './homepage.js'



export const rootRoute = createRootRoute({
    component: RootLayout
  })

  export const routeTree =rootRoute.addChildren([
    homePageRoute,authRoute,dashboardRoute
  ])
