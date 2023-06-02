import styles from './ClientsPage.module.scss'

interface IAllClicents {
  title: string
  clients: string[]
}
const ClientsPage = async () => {
  const allClients: IAllClicents[] = await fetch(
    `${process.env.API}/api/clients`
  ).then((res) => res.json())
  return (
    <div className={styles.pageContainer}>
      <h2>Клиенты</h2>
      <div className={styles.listContainer}>
        {allClients.map((client) => {
          return (
            <div className={styles.clientContainer} key={client.title}>
              <span>{client.title}:</span>
              <ul>
                {client.clients.map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientsPage
