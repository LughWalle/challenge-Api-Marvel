import { useContext } from 'react'
import Card from '_components/ui/card';
import styles from './styles.module.scss'
import { MarvelContext } from '_context/MarvelContext';
import Button from '_components/ui/Button';

const AllCharsList = () => {
  const { chars, handleMoreChars } = useContext(MarvelContext)

  return (
    <main className={styles.main}>
      <p className={styles.titleList}>LISTA DE PERSONAGENS DA MARVEL</p>
      <ul className={styles.charsList}>
        {
          chars.map((char) => (
              <li key={char.id}>
                <Card src={`${char.thumbnail.path}.${char.thumbnail.extension}`} title={char.name} />
              </li>
            )
          )
        }
      </ul>
      <Button className={styles.btnMore} onClick={handleMoreChars} >MAIS</Button>
    </main>
  )
}

export default AllCharsList