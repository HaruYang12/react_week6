import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/styles/all.scss'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'
import store from './redux/store'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} future={{ v7_startTransition: true,  v7_relativeSplatPath: true }}/>
    </Provider>
  </StrictMode>
)
