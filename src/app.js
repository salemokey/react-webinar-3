import React, { useCallback } from 'react';
import List from './components/list';
import Controls from './components/controls';
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

  const callbacks = {
    onDeleteItem: useCallback(
      code => {
        store.deleteItem(code);
      },
      [store],
    ),

    onSelectItem: useCallback(
      code => {
        store.selectItem(code);
      },
      [store],
    ),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddItemCart: useCallback((item) => {
      store.addItemCart(item);
    }, [store]),
  };

  return (
    <PageLayout>
      <Head title="Приложение на чистом JS" />
      <Cart onAdd={callbacks.onAddItem} cart={cart}/>
      <List
        list={list}
        onDeleteItem={callbacks.onDeleteItem}
        onSelectItem={callbacks.onSelectItem}
        onAddItemCart={callbacks.onAddItemCart}
      />
    </PageLayout>
  );
}

export default App;
