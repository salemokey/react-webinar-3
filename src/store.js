import { generateCode } from './utils';

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.totalCartItemsCount = 0;
    this.totalCartPrice = 0;
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
    const itemExist = this.state.cart.some(cartItem => cartItem.code === item.code);
    this.totalCartItemsCount += 1;
    this.totalCartPrice += item.price;
    if (!itemExist)
      this.setState({
        ...this.state,
        cart: [...this.state.cart, { ...item, count: 1 }],
        totalCartItemsCount: this.totalCartItemsCount,
        totalCartPrice: this.totalCartPrice,
      });
    else
      this.setState({
        ...this.state,
        cart: [
          ...this.state.cart.map(itemCart =>
            itemCart.code === item.code
              ? { ...itemCart, price: itemCart.price + item.price, count: itemCart.count + 1 }
              : itemCart,
          ),
        ],
        totalCartItemsCount: this.totalCartItemsCount,
        totalCartPrice: this.totalCartPrice,
      });
    console.log(this.state.cart);
  }

  /**
   * Удаление записи из корзины по коду
   * @param code
   */
  deleteItemCart(item) {
    this.totalCartPrice -= item.price;
    this.totalCartItemsCount -= item.count;
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cart: this.state.cart.filter(elem => elem.code !== item.code),
      totalCartPrice: this.totalCartPrice,
      totalCartItemsCount: this.totalCartItemsCount,
    });
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
