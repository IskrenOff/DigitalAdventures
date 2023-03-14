
import { Home } from "./components/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

const AppRoutes = [
    {
        index: true,
        element: <Login />
    },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
];


export default AppRoutes;
