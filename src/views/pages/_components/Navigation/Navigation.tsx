import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="bg-gray-100 h-screen w-[300px]">
        <nav className="flex-1 space-y-1 px-2 pb-4">

            <div>
                React Components
            </div>
            <div>
                <input placeholder="Search" />
            </div>
            
            <ul>
                Page Examples
                Documents
                Components
            </ul>

           
            <ul>
                <h5>Components</h5>
                <li>
                    <span>Form</span>
                    <ul>
                        <li>Input</li>
                        <li>Checkbox</li>
                        <li>Radio</li> 
                    </ul>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/button">Button</NavLink>
                </li>
            </ul>
        
        </nav>
        </div>
    )
}

export default Navigation;