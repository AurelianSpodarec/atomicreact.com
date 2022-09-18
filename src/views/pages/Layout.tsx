import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./../../routes/CustomRoutes";
import Navigation from "./_components/Navigation/Navigation";

function Layout() {
    return (
        <BrowserRouter>
        <div className="relative overflow-hidden h-screen">
        <div className="flex flex-col h-full overflow-hidden">


            <div className="flex overflow-hidden">
                <Navigation />

                <div className="flex flex-1 flex-col">
                    <CustomRoutes />
                </div>
            </div>
        

        </div>
        </div>
        </BrowserRouter>
    )
}

export default Layout;