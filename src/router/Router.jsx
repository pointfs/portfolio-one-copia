import {createBrowserRouter} from 'react-router-dom';
import LayoutPublic from '../../src/layout/LayoutPublic';
import Home from '../../src/pages/home/Home';



const router = createBrowserRouter([
    {
    path: '/',
    element: <LayoutPublic />,
    children:[
      {
        path: '/',
        element: <Home />
      }
    ]
    }
])

export default router;