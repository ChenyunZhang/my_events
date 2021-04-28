import Link from "next/link"
import {useRouter} from "next/router"
import Layout from "../components/Layout"

export default function HomePage() {
  const router=useRouter()
  return (
    <>
    <Layout>
      <title>Event Management</title>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
    </Layout>
    </>
    )

}
