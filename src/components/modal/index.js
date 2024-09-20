import React from 'react';
import Item from '../item';
import './style.css';
import Head from '../head';
import PropTypes from 'prop-types';
function Modal({
  cart,
  totalCartPrice,
  onDeleteItemCart = () => {},
  openCart,
  setOpenCart = () => {},
}) {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <div className="Header-container">
          <Head title="Корзина">
            <div className="Header-container__button">
              <button className="close-btn" onClick={() => setOpenCart(!openCart)}>
                Закрыть
              </button>
            </div>
          </Head>
        </div>
        {cart.map(item => (
          <div key={item.code} className="Modal-content__list-item">
            <Item item={item} isInCart={cart.includes(item)} onDeleteItemCart={onDeleteItemCart} />
          </div>
        ))}
        <div className="Footer">
          {cart.length > 0 && (
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

Modal.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
      isInCart: PropTypes.bool,
    }),
  ),
  totalCartPrice: PropTypes.number,
  onDeleteItemCart: PropTypes.func,
  openCart: PropTypes.bool,
  setOpenCart: PropTypes.func,
};

export default React.memo(Modal);
