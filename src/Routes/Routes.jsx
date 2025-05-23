import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout> ,    
        },
        {
            path: "/auth",
            element: <div>Authentic Layout</div>,
    },
    {
            path: "/news",
            element: <div>News Layout</div>,
    },
    {
            path: "/*",
            element: <div>Error-404</div>,
    },

] 
);    
export default router;