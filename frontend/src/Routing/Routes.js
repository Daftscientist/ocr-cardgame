import Index from "Pages/Index"
import Register from "Pages/Register"
import Login from "Pages/Login"
import Dashboard from "Pages/Dashboard"

const Routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    element: Index,
    restricted: false
  },
  {
    title: 'Login',
    path: '/login',
    exact: true,
    element: Login,
    restricted: false
  },
  {
    title: 'Register',
    path: '/register',
    exact: true,
    element: Register,
    restricted: false
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    exact: true,
    element: Dashboard,
    restricted: false
  }
]

export default Routes