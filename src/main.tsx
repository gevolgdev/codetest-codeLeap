import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Feed, SignUp } from './pages'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <SignUp/>
      },
      {
        path: '/feed',
        element: <Feed/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
