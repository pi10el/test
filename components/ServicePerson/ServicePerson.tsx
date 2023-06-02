import styles from './ServicePerson.module.scss'
import Image from 'next/image'

interface Props {
  name: string
  image: any
  work: string
  phone: string
}
const ServicePerson = ({ name, image, work, phone }: Props) => {
  return (
    <div className={styles.personContainer}>
      <Image src={image} alt='nikitenkov image' />
      <div>
        <p className='font-semibold'>Ответственный за направление:</p>
        <p>{name}</p>
        <p>{work}</p>
        <p>Контактный телефон: {phone}</p>
      </div>
    </div>
  )
}

export default ServicePerson
