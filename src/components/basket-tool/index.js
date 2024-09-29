import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from '../../utils';
import './style.css';

function BasketTool({ sum, amount, onOpen, children }) {
  const cn = bem('BasketTool');
  return (
    <div className={cn()}>
      <div className={cn('container-control')}>
        <div className="back-link">{children}</div>
        <div className={cn('title')}>
          <span className={cn('label')}>В корзине:</span>
          <span className={cn('total')}>
            {amount
              ? `${amount} ${plural(amount, {
                  one: 'товар',
                  few: 'товара',
                  many: 'товаров',
                })} / ${numberFormat(sum)} ₽`
              : `пусто`}
          </span>
          <button onClick={onOpen}>Перейти</button>
        </div>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
};

BasketTool.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0,
};

export default memo(BasketTool);
