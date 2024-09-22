import React, { useCallback } from 'react';
import List from './components/list';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Cart from './components/cart';
import Modal from './components/modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const countInCart = list.filter(item => item.isInCart).length;
  const totalCartItemsCount = store.getState().totalCartItemsCount;
  const isCartOpen = store.getState().isCartOpen;
  const totalCartPrice = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    currency: 'RUB',
  }).format(store.getState().totalCartPrice);

  const callbacks = {
    onDeleteItemCart: useCallback(
      item => {
        store.deleteItemCart(item);
      },
      [store],
    ),
    onAddItemCart: useCallback(
      item => {
        store.addItemCart(item);
      },
      [store],
    ),
    onToggleCart: useCallback(() => {
      store.toggleCart();
    }, [store]),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Cart
        totalCartItemsCount={totalCartItemsCount}
        totalCartPrice={totalCartPrice}
        onToggleCart={callbacks.onToggleCart}
        countInCart={countInCart}
      />
      <Modal
        onDeleteItemCart={callbacks.onDeleteItemCart}
        onToggleCart={callbacks.onToggleCart}
        totalCartPrice={totalCartPrice}
        isCartOpen={isCartOpen}
        list={list}
        countInCart={countInCart}
      />
      <List list={list} onAddItemCart={callbacks.onAddItemCart} />
    </PageLayout>
  );
}

export default App;
