import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="bg-gray-100 h-screen">
        <nav className="flex-1 space-y-1 px-2 pb-4">
            
            <NavLink to="/">Home</NavLink>  
          
        </nav>
        </div>
    )
}

export default Navigation;