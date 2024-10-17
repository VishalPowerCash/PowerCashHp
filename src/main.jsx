import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home, UserAgreement, Privacy, Loc } from "./pages/index.js"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path="" element={<Home />} />
    <Route path="user-agreement" element={<UserAgreement />} />
    <Route path="privacy" element={<Privacy />} />
    <Route path="products" element={<Privacy />} >
      <Route path="line-of-credit" element={<Loc />} />
    </Route>

  </Route >
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
