import styles from './License.module.scss'
import Image from 'next/image'

interface Props {
  img: any
  description: string
}

const License = ({ img, description }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={img} alt={description} />
      <p>{description}</p>
    </div>
  )
}

export default License
