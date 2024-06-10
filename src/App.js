
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider

} from "react-router-dom";
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home.jsx'
import About from './pages/About'
import { ProductsData } from './api/api.jsx';


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
     
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} loader={ProductsData} />
      <Route path='about' element={<About />} />
    </Route>
  ));

  return (
    <div className='font-bodyFont bg-gray-100'>
    <RouterProvider router={router} />
    </div>
  )

}

export default App;
