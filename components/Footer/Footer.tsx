import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © 1999-2023 <a href='http://localhost:3000'>АО &quot;АНР&quot;.</a> Все
      права защищены
    </footer>
  )
}

export default Footer
