import { useRoutes } from "react-router-dom";

import NotFound from "views/pages/NotFound";
import Home from "views/pages/Home";
import Artist from "views/pages/Artist";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/artists",
            element: <Artist />
        }
    ]);

    return routes;
}

export default CustomRoutes;