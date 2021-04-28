import Link from "next/link"
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <Link href="/">
                <a>Event.com</a>
            </Link>

            <nav>
                <ul>
                    <li><Link href="/event"><a>Events</a></Link></li>
                    <li>LOGIN</li>
                </ul>
            </nav>
        </header>
    )
}
