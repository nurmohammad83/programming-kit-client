import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../Login/Login";

import SignUp from "../Login/SignUp";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/courses',
                element:<Courses/>,
            },
            {
                path:'/blog',
                element:<Blog/>,
            },
            {
                path:'/faq',
                element:<Faq/>,
            },
            {
                path:'/login',
                element:<LogIn/>,
            },
            {
                path:'/signup',
                element:<SignUp/>,
            },
        ]

    }
])

export default router;