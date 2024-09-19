import React from 'react';
import Item from '../item';
import './style.css';
function Modal({ cart, totalCartItemsCount, totalCartPrice, onDeleteItemCart }) {
  return (
    <div className="Modal">
      <div className="Modal__content">
        {cart.map(item => (
          <div className="list-item">
            <Item item={item} isInCart={cart.includes(item)} onDeleteItemCart={onDeleteItemCart} />
          </div>
        ))}
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
