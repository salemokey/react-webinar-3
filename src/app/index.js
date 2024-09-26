import { useCallback, useContext, useEffect, useState } from 'react';
import Main from './main';
import Basket from './basket';
import useStore from '../store/use-store';
import useSelector from '../store/use-selector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemPageLayout from '../components/item-page';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/itemPage" element={<ItemPageLayout />} />
      </Routes>
      {activeModal === 'basket' && <Basket />}
    </>
  );
}
///
export default App;
