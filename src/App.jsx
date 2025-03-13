import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Layout from './Layout'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './UtilComponents/Navbar'
const router = 
createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<HomePage/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App