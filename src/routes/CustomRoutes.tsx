import { useRoutes } from "react-router-dom";

import NotFound from "./../views/pages/NotFound";

import ButtonIndex from "../views/pages/Components/Button/ButtonIndex";
import ButtonPlayground from "views/pages/Components/Button/ButtonPlayground";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/atoms/button",
            element: <ButtonIndex />
        },
        {
            path: "/atoms/button/playground",
            element: <ButtonPlayground />
        }
    ]);

    return routes;
}

export default CustomRoutes;