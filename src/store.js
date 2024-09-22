/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.totalCartItemsCount = 0;
    this.totalCartPrice = 0;
    this.isCartOpen = false;
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   * @param item
   */

  addItemCart(item) {
    const existingItem = this.state.list.find(listItem => listItem.code === item.code);
    this.totalCartPrice += item.price;
    this.totalCartItemsCount += 1;
    if (existingItem) {
      if (!existingItem.isInCart) {
        this.setState({
          ...this.state,
          list: [
            ...this.state.list.map(listItem =>
              listItem.code === item.code ? { ...listItem, count: 1, isInCart: true } : listItem,
            ),
          ],
          totalCartItemsCount: this.totalCartItemsCount,
          totalCartPrice: this.totalCartPrice,
        });
      } else if (existingItem.isInCart) {
        existingItem.count += 1;
        this.setState({
          ...this.state,
          list: [
            ...this.state.list.map(listItem =>
              listItem.code === item.code ? { ...listItem, count: existingItem.count } : listItem,
            ),
          ],
          totalCartPrice: this.totalCartPrice,
          totalCartItemsCount: this.totalCartItemsCount,
        });
      }
    }
  }

  /**
   * Удаление записи из корзины по коду
   * @param code
   */
  deleteItemCart(item) {
    const existingItem = this.state.list.find(listItem => listItem.code === item.code);
    this.totalCartPrice -= (item.price * item.count);
    this.totalCartItemsCount -= item.count;
    if (existingItem) {
      this.setState({
        ...this.state,
        // Новый список, в котором не будет удаляемой записи
        list: [
          ...this.state.list.map(listItem =>
            listItem.code === item.code ? { ...listItem, isInCart: false } : listItem,
          ),
        ],
        totalCartPrice: this.totalCartPrice,
        totalCartItemsCount: this.totalCartItemsCount,
      });
    }
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    this.setState({ ...this.state, isCartOpen: this.isCartOpen });
  }
  /**
   * Выделение записи по коду
   * @param code
   */
  // selectItem(code) {
  //   this.setState({
  //     ...this.state,
  //     list: this.state.list.map(item => {
  //       if (item.code === code) {
  //         // Смена выделения и подсчёт
  //         return {
  //           ...item,
  //           selected: !item.selected,
  //           count: item.selected ? item.count : item.count + 1 || 1,
  //         };
  //       }
  //       // Сброс выделения если выделена
  //       return item.selected ? { ...item, selected: false } : item;
  //     }),
  //   });
  // }
}

export default Store;
