import React, { memo, useCallback, useEffect } from 'react';
import Head from '../head';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import PageLayout from '../page-layout';
import { Link, useParams } from 'react-router-dom';
import { cn as bem } from '@bem-react/classname';
import BasketTool from '../basket-tool';

const Card = () => {
  const { id } = useParams();
  const store = useStore();
  const cn = bem('Card');

  useEffect(() => {
    store.actions.card.load(id);
  }, [id]);

  const select = useSelector(state => ({
    item: state.card.item,
    list: state.basket.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  };

  return (
    <>
      <PageLayout>
        <Head title={select.item.title} />
        <div className={cn('')}>
          <div className={cn('controls')}>
            <Link to="/">Главная</Link>
            <BasketTool
              onOpen={callbacks.openModalBasket}
              amount={select.amount}
              sum={select.sum}
            />
          </div>

          <div className={cn('description')}>
            <p>{select.item.description}</p>
          </div>
          <div className={cn('country')}>{select.item.madeIn}</div>
          <div className={cn('price')}>{select.item.price}</div>
          <button onClick={callbacks.addToBasket}>Добавить</button>
        </div>
      </PageLayout>
    </>
  );
};

export default memo(Card);
