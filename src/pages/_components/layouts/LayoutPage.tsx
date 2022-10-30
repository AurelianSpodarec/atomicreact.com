import Link from "next/link";
import Footer from "../Footer";
import Header from "../Header";

function LayoutPage({children,}:any) {
    return (
        <div className="bg-white dark:bg-gray-800">
            <Header />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default LayoutPage;