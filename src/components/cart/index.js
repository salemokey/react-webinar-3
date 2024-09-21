import React, { useState } from 'react';
import './style.css';
import Modal from '../modal';
import { plural } from '../../utils';
import PropTypes from 'prop-types';

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
              ? `${cart.length} ${plural(cart.length, variants)} / ${totalCartPrice} ₽`
              : 'Пусто'}
          </span>
        </div>
        <div className="Status-cart__button">
          <button className="openCart-btn" onClick={() => setOpenCart(!openCart)}>
            Перейти
          </button>
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

Cart.propTypes = {
  totalCartItemsCount: PropTypes.number,
  totalCartPrice: PropTypes.number,
  onDeleteItemCart: PropTypes.func,
};

// Controls.defaultProps = {
//   onAdd: () => {},
// };

export default React.memo(Cart);
