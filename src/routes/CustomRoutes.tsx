import { useRoutes } from "react-router-dom";

import NotFound from "./../views/pages/NotFound";

import ButtonIndex from "../views/pages/Components/Button/ButtonIndex";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/atoms/button",
            element: <ButtonIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;