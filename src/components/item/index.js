import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item({ onAddItemCart = () => {}, onDeleteItemCart = () => {}, ...props }) {
  console.log(props);
  const callbacks = {
    AddItemCart: () => {
      onAddItemCart(props.item);
    },
    DeleteItemCart: () => {
      onDeleteItemCart(props.item);
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
          <button onClick={callbacks.DeleteItemCart}>Удалить</button>
        ) : (
          <button onClick={callbacks.AddItemCart}>Добавить</button>
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
    price: PropTypes.number,
  }).isRequired,
  onAddItemCart: PropTypes.func,
  onDeleteItemCart: PropTypes.func,
};

export default React.memo(Item);
