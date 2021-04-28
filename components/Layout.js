import React from 'react'
import Head from "next/head"

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>
            <div>
                {children}
            </div>
        </div>
    )

    Layout.defaultProps={
        title: "Event.com",
        description: "manage your events as easy as a click",
        keywords: "Event,productive,time management"
    }
}
