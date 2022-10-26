import Link from "next/link";
import Header from "../Header";

function LayoutPage({children,}:any) {
    return (
        <div>
            <Header />
            <div className="ml-[400px]">
                {children}
            </div>
        </div>
    );
}

export default LayoutPage;