import styles from './Person.module.scss'
import Image from 'next/image'

interface Props {
  name: string
  work: string
  description: string
  image: any
  exp: string
  phone: string
  email: string
  isCertified: boolean
}
const Person = ({
  name,
  work,
  description,
  image,
  exp,
  phone,
  email,
  isCertified,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <h3>{name}</h3>
        <p>{work}</p>
      </div>
      <div className={styles.description}>
        <div>
          <Image src={image} alt={name} className={styles.image} />
          {description}
          {isCertified ? <p>Аттестованный аудитор.</p> : ''}
          <p>{exp}</p>
          <p>Тел.:{' ' + phone}</p>
          <p>E-mail: {email}</p>
        </div>
      </div>
    </div>
  )
}

export default Person
