import Link from 'next/link'
import styles from './servicesPage.module.scss'
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation/Navigation'

export const metadata: Metadata = {
  title: 'Услуги',
}

const navButtons = [
  { label: 'Аудит', href: '/services/audit' },
  { label: 'Консалтинговые услуги', href: '/about/contacts' },
  { label: 'Арбитраж', href: '/about/licenses' },
  { label: 'Оценка', href: '/about/licenses' },
  { label: 'Семинары', href: '/about/licenses' },
]

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.navContainer}>
        <Navigation navLinks={navButtons} />
      </div>
      {children}
    </div>
  )
}
