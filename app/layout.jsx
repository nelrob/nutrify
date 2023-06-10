import '@styles/globals.css';
// import { Html } from 'next/document';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Nutrify",
    description: 'Nurture yourself and inspire others.'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="./public/assets/icons/logo.ico" />
            </head>
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