import React from 'react';
import {useSelector} from 'react-redux';
import CartMain from '../components/CartMain';
import CartEmpty from '../components/CartEmpty';


function CartPage() {
  const totalCount = useSelector(({cart}) => cart.totalCount);
  return (
    <>
      {totalCount
        ? <CartMain />
        : <CartEmpty />
      }
    </>
  )
}

export default CartPage
