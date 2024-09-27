import React, { memo, useCallback, useEffect } from 'react';
import Head from '../head';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import PageLayout from '../page-layout';
import { useParams } from 'react-router-dom';
import { cn as bem } from '@bem-react/classname';

const Card = () => {
  const { id } = useParams();
  const store = useStore();

  useEffect(() => {
    store.actions.card.load(id);
  }, [id]);

  const select = useSelector(state => ({
    item: state.card.item,
  }));
  console.log(id);
  const callbacks = {
    // Удаление из корзины
    removeFromBasket: useCallback(_id => store.actions.basket.removeFromBasket(_id), [store]),
    // Закрытие любой модалки
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  };
  return (
    <>
      <PageLayout>
        <Head title={select.item.title} />
        <div className="Description">
          <p>{select.item.description}</p>
          <p>Цена: {select.item.price} руб.</p>
        </div>
      </PageLayout>
    </>
  );
};

export default memo(Card);
