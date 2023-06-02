import styles from './MainPage.module.scss'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <h2>Добро пожаловать!</h2>
      <p>
        Изначально информация на главной странице дублировалась с разделом
        &quot;О компании&quot;
      </p>
    </div>
  )
}
