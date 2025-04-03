import App, {AppProps} from 'next/app'
import '@patternfly/react-core/dist/styles/base.css'
import '@patternfly/react-styles'
import {SessionProvider} from "next-auth/react";

export default function ({Component, pageProps}: AppProps) {
    return <SessionProvider><Component {...pageProps}/></SessionProvider>
}
