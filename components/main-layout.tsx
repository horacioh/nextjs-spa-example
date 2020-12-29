import Link from "next/link"

export default function MainLayout({ children }) {
  return (
    <div>
      <h1>Hello SPA + Nextjs</h1>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/other">Other</Link>
          </li>
        </ul>
      </div>
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  )
}
