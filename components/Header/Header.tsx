import { Navigation } from '../Navigation/Navigation'
import TestSlider from '../TestSlider/TestSlider'
import styles from './Header.module.scss'
import menu from '../../assets/menu.svg'
import Image from 'next/image'
import flagRU from '../../assets/russia.png'
import flagUK from '../../assets/united-kingdom.png'

const navItems = [
  { label: 'Услуги', href: '/services/audit' },
  { label: 'Сотрудники', href: '/sotrudniki' },
  { label: 'О компании', href: '/about' },
  { label: 'Клиенты', href: '/clients' },
]

const Header = () => {
  return (
    <>
      <div className={styles.headerPage}>
        <TestSlider />
      </div>
      <header className={styles.header}>
        <a className='font-semibold text-xl' href='/'>
          ANR.RU
        </a>
        <p className={styles.navList}>
          <Navigation navLinks={navItems} />
        </p>
        <p className={styles.buttons}>
          <button>
            <Image alt='RUS flag' src={flagRU} />
          </button>
          <button>
            <Image alt='UK flag' src={flagUK} />
          </button>
        </p>
        <button className={styles.menuButton}>
          <Image alt='Menu button' src={menu} />
        </button>
      </header>
    </>
  )
}

export default Header
