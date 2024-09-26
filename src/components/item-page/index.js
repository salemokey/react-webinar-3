import React, { memo, useCallback, useEffect } from 'react';
import Head from '../head';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import PageLayout from '../page-layout';

const ItemPageLayout = () => {
  const store = useStore();



  const select = useSelector(state => ({
    item: state.itemPage.item,
  }));

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
        <div className='Description'>
          <p>{select.item.description}</p>
          <p>Цена: {select.item.price} руб.</p>
          <button onClick={callbacks.removeFromBasket}>Удалить из корзины</button>
        </div>
      </PageLayout>
    </>
  );
};

export default ItemPageLayout;
