import '@styles/globals.css';
// import { Html } from 'next/document';
import Head from 'next/head';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Nutrify",
    description: 'Nurture yourself and inspire others.'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
                <link rel="manifest" href="../public/site.webmanifest"/>
                <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>  
    )
}

export default RootLayout