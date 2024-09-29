import React, { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';
import { numberFormat } from '../../utils';
import PropTypes from 'prop-types';

const ItemDescription = ({ item, addToBasket = () => {} }) => {
  const cn = bem('ItemPage');

  const callbacks = {
    onAdd: e => addToBasket(item._id),
  };

  debugger;
  return (
    <div className={cn('')}>
      <div className={cn('container-description')}>
        <div className={cn('description')}>{item.description}</div>
        <div className={cn('country')}>
          {`Страна производитель: `}
          <span className="ItemPage-bold_text">{item.madeIn}</span>
        </div>
        <div className={cn('category')}>
          {`Категория: `}
          <span className="ItemPage-bold_text">{item.category}</span>
        </div>
        <div className={cn('edition')}>
          {`Год выпуска: `}
          <span className="ItemPage-bold_text">{item.edition}</span>
        </div>
        <div className={cn('price')}>
          <span className="ItemPage-bold_text">
            {`Цена: `}
            {numberFormat(item.price)} ₽
          </span>
        </div>
        <button onClick={callbacks.onAdd}>Добавить</button>
      </div>
    </div>
  );
};

ItemDescription.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    madeIn: PropTypes.string,
    category: PropTypes.string,
    edition: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default memo(ItemDescription);
