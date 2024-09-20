import React, { useCallback } from 'react';
import List from './components/list';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Cart from './components/cart';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cart = store.getState().cart;
  const totalCartItemsCount = store.getState().totalCartItemsCount;
  const totalCartPrice = store.getState().totalCartPrice;

  const callbacks = {
    onDeleteItemCart: useCallback(
      item => {
        store.deleteItemCart(item);
      },
      [store],
    ),
    // onSelectItem: useCallback(
    //   code => {
    //     store.selectItem(code);
    //   },
    //   [store],
    // ),
    onAddItemCart: useCallback(
      item => {
        store.addItemCart(item);
      },
      [store],
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Cart
        onDeleteItemCart={callbacks.onDeleteItemCart}
        totalCartItemsCount={totalCartItemsCount}
        totalCartPrice={totalCartPrice}
        cart={cart}
      />
      <List
        list={list}
        onAddItemCart={callbacks.onAddItemCart}
      />
    </PageLayout>
  );
}

export default App;
