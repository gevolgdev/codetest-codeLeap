import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Router Dom
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Feed, SignUp } from './pages'
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'



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
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
