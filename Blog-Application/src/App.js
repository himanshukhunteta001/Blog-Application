import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import { store } from '../src/redux/stores/store';
import HomePage from './components/HomePage';
import AddBlogForm from './components/AddBlogForm';
import BlogDetailsPage from './components/BlogDetailsPage';
import EditBlogDetailPage from './components/EditBlogDetailPage';
import NavbarDetail from './components/NavbarDetail';

const router = createBrowserRouter([
  {
  path:'/',
  element: <NavbarDetail />,
  children: [
  {
    path:'/',
    element:<HomePage />,

  },
  {
    path:'/add-new-blog',
    element:<AddBlogForm />
  },
  {
    path:'/blog-details/:id',
    element:<BlogDetailsPage />
  },
  {
    path:'/edit-blogById/:id',
    element:<EditBlogDetailPage />
  }
]
  }
]);

function App() {
  return (
     <>
     
    <RouterProvider router={router} store={store} />
    </>
  );
}

export default App;
