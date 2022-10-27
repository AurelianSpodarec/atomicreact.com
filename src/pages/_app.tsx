
import "@styles/styles.scss";
import type { AppProps, } from "next/app";

function MyApp({ Component, pageProps, }: AppProps) {
    // console.log("sds",pageProps);
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;