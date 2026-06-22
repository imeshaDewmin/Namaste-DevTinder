import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Body from "./components/Body";
import Login from './pages/Login';
import Profile from "./pages/Profile";
import Feed from './pages/Feed';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';


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
          path: "/",
          element: <Feed />
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
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider >
      </Provider>
    </div>

  )
}

export default App;
