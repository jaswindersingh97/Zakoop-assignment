import React,{useState} from 'react'
import styles from './styles.module.css'
import ProductCard from './../../components/ProductCart'
import {useParams} from 'react-router-dom';
import {useCart} from './../../context/CartContext';
import BillSummary from '../../components/BillSummary/BillSummary';
import {useProducts} from './../../hooks/Products';
function Products() {
  const {storeId} = useParams();
  const { addItem,  removeItem, getQuantity } = useCart();
  // const products = [
  //   {
  //     id: 'p1',
  //     name: 'Fresh Apples',
  //     description: 'Crisp and juicy apples from local farms.',
  //     price: 120,
  //     image: 'https://example.com/images/apples.jpg',
  //     unit: 'kg',
  //     storeId: 's1',
  //     rating: 4.5
  //   },
  //   {
  //     id: 'p2',
  //     name: 'Organic Milk',
  //     description: 'Pure cow milk, organically sourced.',
  //     price: 60,
  //     image: 'https://example.com/images/milk.jpg',
  //     unit: 'litre',
  //     storeId: 's1',
  //     rating: 4
  //   },
  //   {
  //     id: 'p3',
  //     name: 'Brown Bread',
  //     description: 'Whole grain healthy brown bread.',
  //     price: 40,
  //     image: 'https://example.com/images/bread.jpg',
  //     unit: 'packet',
  //     storeId: 's1',
  //     rating: 3.5
  //   }
  // ];
  const {data:products, isLoading} = useProducts(storeId);
  const [search, setSearch] = useState("");

  const filteredProducts = products?.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Explore Products</h1>
        

      </div>
      <div className={styles.body}>
        <div className={styles.left}>
        <div className={styles.searchfield}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
        </div>

        {filteredProducts?.map((product)=>(
          <ProductCard 
          key={product._id}
          id={product._id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.Price}
          storeId={storeId}
          quantity={getQuantity( storeId,product._id)}
          onIncrement={() => addItem( storeId,product)}
          onDecrement={() => removeItem( storeId,product._id)}
          />
        ))
        }
        </div>
        <div className={styles.right}>
          <BillSummary storeId={storeId}/>
        </div>
      </div>
    </div>
  )
}

export default Products
