import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Body from "./components/Body";
import Login from './pages/Login';
import Profile from "./pages/Profile";


function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/profile",
          element: <Profile />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider >
    </div>

  )
}

export default App;
