import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { ChakraProvider } from '@chakra-ui/react';
function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/profile',
        element:<ProfilePage />
      }
    ]

  }
]);

  return (
    <div  className='appStyles'>
      <ChakraProvider>
      <RouterProvider router={router}/>
      </ChakraProvider>
    </div>
  );
}

export default App;