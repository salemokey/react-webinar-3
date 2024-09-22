import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { formatPrice } from '../../utils';

function Item({ onAddItemCart = () => {}, onDeleteItemCart = () => {}, ...props }) {
  const price = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    currency: 'RUB',
  }).format(props.item.price);
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
      <div className="Item-price">{price} &#8381;</div>
      {props.children}
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
  children: PropTypes.node,
  onAddItemCart: PropTypes.func,
  onDeleteItemCart: PropTypes.func,
};

export default React.memo(Item);
