import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ onAdd }) {
 const [openCart, setOpenCart] = useState(false)
 
  return (
    <div className="Controls">
      <button onClick={() => onAdd()}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};

Controls.defaultProps = {
  onAdd: () => {},
};

export default React.memo(Controls);
