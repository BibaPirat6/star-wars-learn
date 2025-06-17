import styles from "./PeopleList.module.css"

export default function PeopleList({ people, images }) {
  return (
    <ul className={styles.list__container}>
      {
        people.map(({ id, name }) => (
          <li key={id} className={styles.list__item}>
            <a href="/">
              <img src={images[id]} alt={name} className={styles.person__photo} />
              <p>{name}</p>
            </a>
          </li>
        ))}
    </ul>
  )
}
