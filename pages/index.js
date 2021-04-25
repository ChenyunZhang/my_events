import Link from "next/link"
import {useRouter} from "next/router"

export default function HomePage() {
  const router=useRouter()
  console.log(router);
  return (
    <>
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
    </>
    )

}
