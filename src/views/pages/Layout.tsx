import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./../../routes/CustomRoutes";
import Header from "./_components/Header/Header";
import Navigation from "./_components/Navigation/Navigation";

function Layout() {
    return (
        <BrowserRouter>
        
        <Header />
        
        <div className="overflow-hidden">
        {/* <div className="relative overflow-hidden h-screen"> */}
        {/* <div className="flex flex-col h-full overflow-hidden"> */}


            {/* <div className="flex overflow-hidden"> */}
                <Navigation />
                <main className="lg:pl-[310px]">
                dsd  <br/>
                dsd  <br/>
                dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>dsd  <br/>               
                </main>
                {/* <div className="flex flex-1 flex-col">
                    <CustomRoutes />
                </div> */}
            {/* </div> */}
        

        {/* </div> */}
        {/* // </div> */}
        </div>

        </BrowserRouter>
    )
}

export default Layout;