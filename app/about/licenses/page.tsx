import styles from './LicensesPage.module.scss'
import License from '@/components/License/License'

interface ILicenses {
  img: any
  description: string
}

const LicensesPage = async () => {
  const allLicenses: ILicenses[] = await fetch(
    `${process.env.API}/api/licenses`
  ).then((res) => res.json())
  return (
    <div className={styles.pageContainer}>
      <h2>Лицензии и свидетельства</h2>
      <div className={styles.licensesContainer}>
        {allLicenses.map((license, i) => {
          return <License {...license} key={i} />
        })}
      </div>
    </div>
  )
}

export default LicensesPage
