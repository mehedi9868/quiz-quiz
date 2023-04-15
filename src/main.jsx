import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Quiz from './components/Quiz'
import NotFoundPage from './components/NotFoundPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/quiz/:quizID",
        element: <Quiz></Quiz>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
