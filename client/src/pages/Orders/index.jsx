import React from 'react'
import { useOrders } from '../../hooks/Orders'
function Orders() {
  const {data,isLoading} = useOrders();
  console.log(data)

  return (
    <div>
      {isLoading && "loading"}
    </div>
  )
}

export default Orders
