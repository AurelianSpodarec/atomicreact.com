import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";
import Navigation from "./_components/Navigation/Navigation";

function Layout() {
    return (
        <BrowserRouter>
        <div>
    
            <div className="flex">
                <Navigation />

                <div className="flex flex-1 flex-col">
                    <CustomRoutes />
                </div>
            </div>

        </div>
        </BrowserRouter>
    )
}

export default Layout;