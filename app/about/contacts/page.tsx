import styles from './ContactsPage.module.scss'

const ContactsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>Контакты</h2>
      <p>
        <span>Адрес</span>: 620014, г. Екатеринбург, пер. Химиков, 3.
      </p>
      <p>
        <span>Телефон</span>: (343) 378-93-33, 378-95-00, 378-93-30
      </p>
      <p>
        <span>Электронная почта</span>: anr@anr.ru
      </p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.338751972735!2d60.595978776789124!3d56.840133073506074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8a7e65a187%3A0xacfc8a857ebb2d28!2z0YPQuy4g0KXQuNC80LjQutC-0LIsIDMsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMDAxNA!5e0!3m2!1sru!2sru!4v1685565435133!5m2!1sru!2sru'
        loading='lazy'
        className={styles.map}
      ></iframe>
    </div>
  )
}

export default ContactsPage
