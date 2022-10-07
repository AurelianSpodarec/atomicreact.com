import { NavLink } from "react-router-dom";

// const nav = [
//     {
//         name: "Button"
//     }
// ]

function NavItem({title, href}:any) {
    return (
        <li className="w-full">
            <NavLink to="/atoms/button" className={`${({ isActive }:any) => isActive ? "bg-[#2a2b2f]" : ""} hover:bg-gray-800 w-full text-gray-50 p-3 block`}>{title}</NavLink>
        </li>
    )
}

function Navigation() {
    return (
        <div className="fixed bg-[#202125] h-screen w-[310px]">
        <nav className="flex-1 space-y-1 p-8">

           
            <div className="sticky top-0">
                <input className="w-full" placeholder="Search" />
            </div>
            
            {/*             
            <ul>
                Page Examples
                /examples

                /examples/sites - show all page examples
                /examples/sites/:id - show single page example
                Documents
                Components
            </ul> */}

            <h3 className="font-bold text-white text-xl">Atoms</h3>
            <ul className="flex flex-wrap space-y-4">
                <NavItem title="Button" href="/atoms/button" />
                <NavItem title="Radio" href="/atoms/radio" />
                <NavItem title="Checkbox" href="/atoms/checkbox" />
                <NavItem title="Input" href="/atoms/input" />
                <NavItem title="Text" href="/atoms/text" />
                <NavItem title="Container" href="/atoms/Container" />
                <NavItem title="Section" href="/atoms/section" />
           </ul>
           
        
        </nav>
        </div>
    )
}

export default Navigation;