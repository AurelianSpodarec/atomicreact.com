import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";

function Layout() {
    return (
        <BrowserRouter>
        <div>
            
            <header>
                Header
            </header>

                <CustomRoutes />

            <footer>
                Footer
            </footer>

        </div>
        </BrowserRouter>
    )
}

export default Layout;