import Image from 'next/image'
import Link from 'next/link'
import Logo from "./dojo-logo.png"

export const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center gap-5">
        <Image
          src={Logo}
          alt='Dojo helpdesk logo'
          width={70}
          quality={100}
          placeholder='blur'
        />
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </div>

      <div>
        <Link href="/tickets/create">
          <button className="btn-primary">Create new ticket</button>
        </Link>
      </div>
    </nav>
  )
}
