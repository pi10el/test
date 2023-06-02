'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'

interface NavLink {
  label: string
  href: string
}

interface Props {
  navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname()
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? styles.linkActive : styles.link}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

export { Navigation }
