
import "@styles/styles.scss";
import type { AppProps, } from "next/app";

function MyApp({ Component, pageProps, }: AppProps) {
    return (
    // <Layout title={title} tableOfContents={tableOfContents}>

        <Component {...pageProps} />
        // </Layout>
    );
}

export default MyApp;