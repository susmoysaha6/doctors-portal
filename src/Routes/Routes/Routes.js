import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout"
import Main from "../../Layouts/Main"
import Appointment from "../../Pages/Appiontment/Appointment/Appointment"
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor"
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/SignUp/SignUp"
import AdminRoutes from "../AdminRoutes/AdminRoutes"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
        ]
    }
])