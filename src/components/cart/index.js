import React, { useState } from 'react';
import './style.css';
import { formatPrice, plural } from '../../utils';
import PropTypes from 'prop-types';

function Cart({ totalCartPrice, onToggleCart = () => {}, countInCart }) {
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
            {countInCart > 0
              ? `${countInCart} ${plural(countInCart, variants)} / ${totalCartPrice} ₽`
              : 'Пусто'}
          </span>
        </div>
        <div className="Status-cart__button">
          <button className="openCart-btn" onClick={() => onToggleCart()}>
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  totalCartPrice: PropTypes.string,
  onToggleCart: PropTypes.func,
};

export default React.memo(Cart);
