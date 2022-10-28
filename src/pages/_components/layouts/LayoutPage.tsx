import Link from "next/link";
import Header from "../Header";

function LayoutPage({children,}:any) {
    return (
        <div className="bg-gray-800">
            <Header />
            <main className="">
                {children}
            </main>
        </div>
    );
}

export default LayoutPage;