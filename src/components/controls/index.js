import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ openCart, setOpenCart }) {
  // return (
  //   <div className="Controls">
  //     <button onClick={() => ()}>Перейти</button>
  //   </div>
  // );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};

Controls.defaultProps = {
  onAdd: () => {},
};

export default React.memo(Controls);
