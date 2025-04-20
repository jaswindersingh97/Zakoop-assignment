import React from 'react';
import { useOrders } from '../../hooks/Orders';
import styles from './styles.module.css';
import Order from '../../components/Order';

function Orders() {
  const { data, isLoading } = useOrders();

  const orders = data?.response  || [];
  console.log(orders)
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Orders</h1>
      </div>
      <div className={styles.body}>
        {isLoading ? (
          "Loading..."
        ) : (
          orders.length > 0 ? (
            orders.map((order) => (
              <Order key={order._id} order={order} />
            ))
          ) : (
            <p>No orders available</p>
          )
        )}
      </div>
    </div>
  );
}

export default Orders;
