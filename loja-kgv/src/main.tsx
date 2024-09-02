import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import PaginaInicial from './routes/PaginaInicial/index.tsx'

const routes = createBrowserRouter([
  {path:"/" , element:<App /> , children:[
    {path:"/" , element:<PaginaInicial />},
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
