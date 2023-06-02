import Person from '@/components/Person/Person'
import styles from './Sotrudniki.module.scss'

interface IPerson {
  name: string
  work: string
  isCertified: boolean
  description: string
  exp: string
  phone: string
  email: string
  image: any
}

const Sotrudniki = async () => {
  const allPersons: IPerson[] = await fetch(
    `${process.env.API}/api/persons`
  ).then((res) => res.json())
  return (
    <div className={styles.pageContainer}>
      <h2>Сотрудники</h2>
      <p className={styles.paragraph}>
        В группе компаний Ассоциации «Налоги России» работает около 30 человек,
        в том числе аудиторы, имеющие квалификационный аттестат на проведение
        аудита на предприятиях любых форм собственности, помощники аудиторов,
        дипломированные юристы и оценщики.
      </p>
      <p className={styles.paragraph}>
        Сотрудники компании — высококвалифицированные специалисты, обладающие
        теоретическими познаниями и практическим опытом в области
        макроэкономики, налогового законодательства и планирования, аудита и
        юридического сопровождения предприятий различных отраслей и форм
        собственности, оценки.
      </p>
      <div className={styles.personsContainer}>
        {allPersons.map((person) => {
          return (
            <Person
              name={person.name}
              work={person.work}
              isCertified={person.isCertified}
              description={person.description}
              exp={person.exp}
              phone={person.phone}
              email={person.email}
              image={person.image}
              key={person.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sotrudniki
