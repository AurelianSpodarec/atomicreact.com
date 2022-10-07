import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./../../routes/CustomRoutes";
import Header from "./_components/Header/Header";
import Navigation from "./_components/Navigation/Navigation";

function Layout() {
    return (
        <BrowserRouter>
        
        <Header />

        <div className="overflow-hidden">
            <Navigation />
            
            <main className="lg:pl-[310px]">
                <CustomRoutes />
            </main>
               
        </div>

        </BrowserRouter>
    )
}

export default Layout;