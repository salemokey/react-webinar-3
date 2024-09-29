import StoreModule from '../module';

class Basket extends StoreModule {
  initState() {
    return {
      list: [],
      sum: 0,
      amount: 0,
    };
  }

  /**
   * Добавление товара в корзину
   * @param _id Код товара
   */
  addToBasket(_id) {
    let sum = 0;
    let exist = false;

    // Обновляем список и считаем сумму
    const list = this.getState().list.map(item => {
      let result = item;
      if (item._id === _id) {
        exist = true; // Запомним, что товар найден в корзине
        result = { ...item, amount: item.amount + 1 };
      }
      sum += result.price * result.amount;
      return result;
    });

    if (!exist) {
      // Находим товар в каталоге
      let item = this.store.getState().catalog.list.find(item => item._id === _id);

      if (!item) {
        // Если товар не найден, загружаем его через API
        this.store.actions.card.load(_id).then(apiItem => {
          if (apiItem) {
            const newList = [...list, { ...apiItem, amount: 1 }];
            const newSum = sum + apiItem.price;
            this.setState({
              ...this.getState(),
              list: newList,
              sum: newSum,
              amount: newList.length,
            });
          }
        });
      } else {
        // Если товар найден в каталоге
        const newList = [...list, { ...item, amount: 1 }];
        const newSum = sum + item.price;
        this.setState({
          ...this.getState(),
          list: newList,
          sum: newSum,
          amount: newList.length,
        });
      }
    } else {
      // Если товар уже есть в корзине
      this.setState({
        ...this.getState(),
        list,
        sum,
        amount: list.length,
      });
    }
  }

  /**
   * Удаление товара из корзины
   * @param _id Код товара
   */
  removeFromBasket(_id) {
    let sum = 0;

    // Фильтруем список и считаем сумму
    const list = this.getState().list.filter(item => {
      if (item._id === _id) return false; // Удаляем товар из списка
      sum += item.price * item.amount; // Считаем сумму оставшихся товаров
      return true;
    });

    this.setState(
      {
        ...this.getState(),
        list,
        sum,
        amount: list.length,
      },
      'Удаление из корзины',
    );
  }
}

export default Basket;
