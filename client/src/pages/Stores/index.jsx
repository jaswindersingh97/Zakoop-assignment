import React from 'react'
import styles from './styles.module.css'
import StoreCard from '../../components/StoreCards';
import { useStores } from '../../hooks/Stores';
function Stores() {
const { data: stores, isLoading } = useStores();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Stores</h1>
      </div>
      <div className={styles.body}>
        {stores?.map((store)=>(
          <StoreCard
            key={store._id}
            name={store.name}
            location={store.location}
            image={store.image}
            storeId={store._id}/>
        ))}
      </div>
    </div>
  )
}

export default Stores
