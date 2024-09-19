import React from 'react';
import Item from '../item';
import './style.css';
import Head from '../head';
function Modal({ cart, totalCartPrice, onDeleteItemCart, openCart, setOpenCart }) {
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
          <div className="Modal-content__list-item">
            <Item item={item} isInCart={cart.includes(item)} onDeleteItemCart={onDeleteItemCart} />
          </div>
        ))}
        <div className="Footer">
          {cart.length > 0 && (
            <div className="Footer-content">
              <span>Итого</span>
              {totalCartPrice} &#8381;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Controls.propTypes = {
//   onAdd: PropTypes.func,
// };

// Controls.defaultProps = {
//   onAdd: () => {},
// };

export default React.memo(Modal);
