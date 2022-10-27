import Link from "next/link";
import Header from "../Header";

function LayoutPage({children,}:any) {
    return (
        <div>
            <Header />
            <main className="">
                {children}
            </main>
        </div>
    );
}

export default LayoutPage;