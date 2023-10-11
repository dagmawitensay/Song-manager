import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import PlayScreen from "./Player";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/play/:id',
        element: <PlayScreen />
    }
])

export default router;