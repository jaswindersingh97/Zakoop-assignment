import React from 'react'
import styles from './styles.module.css'
import StoreCard from '../../components/StoreCards';
function Stores() {
const storesData = [
  {
    id: 'store-1',
    name: 'FreshMart',
    location: 'New York, NY',
    image: 'https://source.unsplash.com/400x300/?grocery,store',
    storeId: '/store-1',
  },
  {
    id: 'store-2',
    name: 'Green Basket',
    location: 'Los Angeles, CA',
    image: 'https://source.unsplash.com/400x300/?vegetables,market',
    storeId: '/store-2',
  },
  {
    id: 'store-3',
    name: 'Daily Needs',
    location: 'Chicago, IL',
    image: 'https://source.unsplash.com/400x300/?supermarket,food',
    storeId: '/store-3',
  },
  {
    id: 'store-4',
    name: 'Organic Hub',
    location: 'Austin, TX',
    image: 'https://source.unsplash.com/400x300/?organic,shop',
    storeId: '/store-4',
  },
];


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Stores</h1>
      </div>
      <div className={styles.body}>
        {storesData?.map((store)=>(
          <StoreCard
            name={store.name}
            location={store.location}
            image={store.image}
            storeId={store.storeId}/>
        ))}
      </div>
    </div>
  )
}

export default Stores
