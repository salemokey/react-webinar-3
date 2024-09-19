import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Item(props) {
  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {
    onAddItemCart: () => {
      props.onAddItemCart(props.item);
    },
    onDeleteItemCart: () => {
      props.onDeleteItemCart(props.item);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">{props.item.price} &#8381;</div>
      {props.item.count > 0 && <div className="Item-count">{props.item.count}шт</div>}
      <div className="Item-actions">
        {props.isInCart ? (
          <button onClick={callbacks.onDeleteItemCart}>Удалить</button>
        ) : (
          <button onClick={callbacks.onAddItemCart}>Добавить</button>
        )}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
  onAddItemCart: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
};

export default React.memo(Item);
