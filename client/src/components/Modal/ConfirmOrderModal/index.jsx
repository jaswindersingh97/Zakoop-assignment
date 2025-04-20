import React from 'react';
import { useCreateOrder } from '../../../hooks/Orders';
import { toast } from 'react-toastify';

function ConfirmOrderModal({ items = [], closeModal }) {
  const { mutate, isPending } = useCreateOrder();

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(items, {
      onSuccess: () => {
        toast.success('Order made successfully');
        closeModal();
      },
      onError: () => {
        toast.error('Failed to place order');
      },
    });
  };

  const total = items.reduce((sum, item) => sum + item.Price * item.quantity, 0);

  return (
    <form onSubmit={onSubmit}>
      <p>Please confirm the order:</p>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - {item.quantity} x ₹{item.Price}
          </li>
        ))}
      </ul>
      <h4>Total: ₹{total}</h4>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Placing Order...' : 'Confirm'}
      </button>
    </form>
  );
}

export default ConfirmOrderModal;
