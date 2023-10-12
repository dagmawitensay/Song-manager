import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AudioPlayer from "./Player";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/play/:id',
        element: <AudioPlayer />
    }
])

export default router;