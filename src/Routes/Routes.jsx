import { createBrowserRouter } from "react-router";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <div>Home Layout</div>,    
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