import React, { memo, useCallback, useEffect } from 'react';
import Head from '../../components/head';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import PageLayout from '../../components/page-layout';
import { Link, useParams } from 'react-router-dom';
import { cn as bem } from '@bem-react/classname';
import ItemDescription from '../../components/item-description';
import BasketTool from '../../components/basket-tool';
import ItemControl from '../../components/item-control';

const Card = () => {
  const { id } = useParams();
  const store = useStore();
  const cn = bem('Card');

  useEffect(() => {
    store.actions.card.load(id);
    store.actions.modals.close();
  }, [id]);

  const select = useSelector(state => ({
    item: state.card.item,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  };

  return (
    <>
      <PageLayout>
        <Head title={select.item.title} />
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum}>
          <ItemControl />
        </BasketTool>
        <ItemDescription
          item={select.item}
          list={select.list}
          amount={select.amount}
          sum={select.sum}
          addToBasket={callbacks.addToBasket}
        />
      </PageLayout>
    </>
  );
};

export default memo(Card);
