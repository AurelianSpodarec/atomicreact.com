import Link from "next/link";

function PageLayout({children,}:any) {
    return (
        <>
            <nav>
                <Link href="docs/installation">Docs</Link>
            </nav>
            <h1>Header</h1>
            {children}
        </>
    );
}

export default PageLayout;