import CssBaseline from '@material-ui/core/CssBaseline'
import App from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../components/theme'



export default class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }
    render() {
        const { Component, pageProps, router } = this.props
        
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AnimatePresence exitBeforeEnter>
                     <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </ThemeProvider>
        )
    }
}


