import Link from "next/link";
import Header from "../Header";

function LayoutPage({children,}:any) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default LayoutPage;