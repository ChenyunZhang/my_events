import Link from "next/link"
import Layout from "../components/Layout"

export default function AboutPage() {
    return (
        <Layout title="Let's find the best restaurants">
            <h1>About</h1>
            <Link href="/">Home</Link>
            <p>This is an app to manage your events</p>
            <p>🥰</p>
        </Layout>
    )
}
