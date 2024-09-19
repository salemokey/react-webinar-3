import React, { useState } from 'react';
import Controls from '../controls';
import Item from '../item';
import './style.css';
import Modal from '../modal';
function Cart({ cart, totalCartItemsCount, totalCartPrice, onDeleteItemCart }) {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="Cart">
      <div className="Status-cart">
        <div className="Status-cart__status">
          В корзине:{' '}
          <span className="b">
            {cart.length > 0 ? `${totalCartItemsCount} / ${totalCartPrice}` : 'Пусто'}
          </span>
        </div>
        <div className="Status-cart__button">
          <button onClick={() => setOpenCart(!openCart)}>Перейти</button>
        </div>
      </div>
      <Modal cart={cart} />
    </div>
  );
}

// Controls.propTypes = {
//   onAdd: PropTypes.func,
// };

// Controls.defaultProps = {
//   onAdd: () => {},
// };

export default React.memo(Cart);
