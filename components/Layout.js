import React from 'react'
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            <div classNamE="styles.container">
                {children}
            </div>
            <Footer/>
        </div>
    )

    Layout.defaultProps = {
        title: "Event.com",
        description: "manage your events as easy as a click",
        keywords: "Event,productive,time management"
    }
}
