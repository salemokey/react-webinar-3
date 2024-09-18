import React from 'react';
function Cart({ cart }) {
  //   const [openCart, setOpenCart] = useState(false);

  return (
    <div className="Cart">
      <div>В корзине: {cart.length}</div>
      <button onClick={() => onAdd()}>Перейти</button>
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
