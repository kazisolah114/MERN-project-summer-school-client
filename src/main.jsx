import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main.jsx';
import Home from './Home/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AddClass from './Components/Dashboard/AddClass/AddClass.jsx';
import MyClasses from './Components/Dashboard/MyClasses/MyClasses.jsx';
import ManageClasses from './Components/Dashboard/ManageClasses/ManageClasses.jsx';
import ManageUsers from './Components/Dashboard/ManageUsers/ManageUsers.jsx';
import SelectedClasses from './Components/Dashboard/SelectedClasses/SelectedClasses.jsx';
import EnrolledClasses from './Components/Dashboard/EnrolledClasses/EnrolledClasses.jsx';
import FeedbackModa from './Components/Dashboard/FeedbackModal/FeedbackModa.jsx';
import Instructors from './Components/Instructors/Instructors.jsx';
import Classes from './Components/Classes/Classes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminRoute from './Routes/AdminRoute/AdminRoute.jsx';
import InstructorRoute from './Routes/InstructorRoute/InstructorRoute.jsx';
import UserRoute from './Routes/UserRoute/UserRoute.jsx';
import InvalidPage from './Components/InvalidPage/InvalidPage.jsx';

// import {
//   QueryClient,
//   QueryClientProvider,
// } from 'react-query'
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: 'instructors',
    element: <Instructors></Instructors>
  },
  {
    path: 'classes',
    element: <Classes></Classes>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'addclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myclasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: 'manageclasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'selectedclasses',
        element: <UserRoute><SelectedClasses></SelectedClasses></UserRoute>
      },
      {
        path: 'enrolledclasses',
        element: <UserRoute><EnrolledClasses></EnrolledClasses></UserRoute>
      },
      {
        path: 'feedback/:id',
        element: <FeedbackModa></FeedbackModa>
      },
    ]
  },
  {
    path: '*',
    element: <InvalidPage></InvalidPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
