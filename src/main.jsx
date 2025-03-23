import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import { ToastContainer} from 'react-toastify';
import '@smastrom/react-rating/style.css'
import { ScrollRestoration } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <>
        <Root></Root>
        <ScrollRestoration></ScrollRestoration>
      </>
    ),
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: async () => {
          const res = await fetch('/booksData.json');
          const data =  await res.json();
          return {data};
        }
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: async () => {
          const res = await fetch('/booksData.json');
          const data =  await res.json();
          return {data};
        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
