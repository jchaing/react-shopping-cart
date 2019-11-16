import React, { useContext } from 'react';

// Contexts
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
	console.log(cart);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
	};

	const removeItem = cartId => {
    const newCart = cart.filter((item, i) => i !== cartId)
    setCart(newCart);
    console.log('remove')
	}

  return (
    <div className="shopping-cart">
      {cart.map((item, i) => (
        <Item key={i} cartId={i} removeItem={removeItem} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
