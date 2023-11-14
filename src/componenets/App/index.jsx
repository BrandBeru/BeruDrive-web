import './App.css';

import { MyUnity } from '../../Pages/MyUnity'
import { Bin } from '../../Pages/Bin'
import { Favorites } from '../../Pages/Favorites'
import { All } from '../../Pages/All'
import { Storage } from '../../Pages/Storage'
import { NotFound } from '../../Pages/NotFound'

import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Context, Provider } from '../Context';
import { NavMenu } from '../NavMenu';
import { Spam } from '../../Pages/Spam';
import { NavBar } from '../NavBar';

import { Modal } from "../../componenets/Modal"
import { Editor } from "../../componenets/Editor"
import { UserInfo } from '../UserInfo';


function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      {
        path: '/',
        element: <MyUnity />
      }, {
        path: '/bin',
        element: <Bin />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/all',
        element: <All />
      },
      {
        path: '/storage',
        element: <Storage />
      },
      {
        path: '/spam',
        element: <Spam />
      },
      {
        path: '/*',
        element: <NotFound />
      }
    ])

    return routes
  }
  return (
    <BrowserRouter>
      <Provider>
        <NavMenu />
        <NavBar />
        <AppRoutes />

        <Modal>
          <Editor />
          <UserInfo />
        </Modal>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
