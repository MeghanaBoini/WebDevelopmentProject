
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home/home';
import Login from './components/login/login';
import RootLayout from './components/RootLayout'
import Courses from './components/courses/Courses';
import About from './components/about/About';
import Java from './components/java/Java';
import Python from './components/python/python';
import Javascript from './components/javascript/javascript';
import Pages from './components/pages/Pages';
import Blog from './components/blog/Blog';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //create browser router obj
  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'pages',
          element:<Pages/>
        },
        {
          path:'blog',
          element:<Blog/>
        },
        {
          path:'courses',
          element:<Courses/>,
          children:[
            {
              path:'java',
              element:<Java/>
            },
            {
              path:'python',
              element:<Python/>
            },
            {
              path:'javascript',
              element:<Javascript/>
            }
          ]
        }
      ]
    }
  ])
  
  return(
    <div>
      {/* provider BrowserRouter obj to application*/}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;