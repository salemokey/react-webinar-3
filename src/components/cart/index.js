import React, { useState } from 'react';
import Controls from '../controls';
import Item from '../item';
import './style.css';
import Modal from '../modal';
import { plural } from '../../utils';
function Cart({ cart, totalCartItemsCount, totalCartPrice, onDeleteItemCart }) {
  const [openCart, setOpenCart] = useState(false);
  const variants = {
    one: 'товар',
    few: 'товара',
    many: 'товаров',
  };

  return (
    <div className="Cart">
      <div className="Status-cart">
        <div className="Status-cart__status">
          В корзине:{' '}
          <span className="b">
            {cart.length > 0
              ? `${totalCartItemsCount} ${plural(totalCartItemsCount, variants)} / ${totalCartPrice} ₽`
              : 'Пусто'}
          </span>
        </div>
        <div className="Status-cart__button">
          <button onClick={() => setOpenCart(!openCart)}>Перейти</button>
        </div>
      </div>
      {openCart && (
        <Modal
          cart={cart}
          onDeleteItemCart={onDeleteItemCart}
          openCart={openCart}
          setOpenCart={setOpenCart}
          totalCartPrice={totalCartPrice}
        />
      )}
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
