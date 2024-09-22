import React from 'react';
import Item from '../item';
import './style.css';
import Head from '../head';
import PropTypes from 'prop-types';
function Modal({
  list,
  totalCartPrice,
  onDeleteItemCart = () => {},
  onToggleCart = () => {},
  isCartOpen,
  countInCart,
}) {
  if (isCartOpen === true) {
    return (
      <div className="Modal">
        <div className="Modal__content">
          <div className="Header-container">
            <Head title="Корзина">
              <div className="Header-container__button">
                <button className="close-btn" onClick={() => onToggleCart()}>
                  Закрыть
                </button>
              </div>
            </Head>
          </div>
          {list.map(
            item =>
              item.isInCart && (
                <div key={item.code} className="Modal-content__list-item">
                  <Item item={item} isInCart={item.isInCart} onDeleteItemCart={onDeleteItemCart}>
                    <div className="Item-count">{item.count}шт</div>
                  </Item>
                </div>
              ),
          )}
          <div className="Footer">
            {countInCart > 0 && (
              <div className="Footer-content">
                <span className="Footer-content__text">Итого:</span>
                <span className="Footer-content__number"> {totalCartPrice} &#8381;</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
      isInCart: PropTypes.bool,
    }),
  ),
  totalCartPrice: PropTypes.string,
  onDeleteItemCart: PropTypes.func,
  isCartOpen: PropTypes.bool,
  onToggleCart: PropTypes.func,
  countInCart: PropTypes.number,
};

export default Modal;
