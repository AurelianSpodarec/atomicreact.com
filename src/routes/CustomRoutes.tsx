import { useRoutes } from "react-router-dom";

import NotFound from "views/pages/NotFound";
import Home from "views/pages/Home";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        }
    ]);

    return routes;
}

export default CustomRoutes;