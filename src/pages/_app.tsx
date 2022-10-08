import "@styles/styles.scss";
import type { AppProps, } from "next/app";
import { Layout, } from "./_components/Layout";

function MyApp({ Component, pageProps, }: AppProps) {
    return (
        // <Layout title={title} tableOfContents={tableOfContents}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;