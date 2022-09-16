import '../styles/globals.css'
import '../public/fonts/styles.css'
import Layout from "./layout";
import {ThemeProvider} from "styled-components";
import theme from "../styles/theme";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>

    )
}

export default MyApp
