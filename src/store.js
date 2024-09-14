/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState; // Начальное состояние
    this.countListItems = Math.max(
      0,
      ...this.state.list.map(item => item.code),
    ); // Максимальный код в массиве
    this.listeners = [];
    // Слушатели изменений состояния
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
   * Добавление новой записи
   */
  addItem() {
    this.countListItems += 1;
    this.setState({
      ...this.state,
      list: [
        ...this.state.list,
        {
          code: this.countListItems,
          title: 'Новая запись',
          totalSelectClickCount: 0,
        },
      ],
    });
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code),
    });
  }
  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      selectedItemCode: code,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selected = !item.selected;
        } else if (this.state.selectedItemCode === item.code) {
          item.selected = false;
        }
        return item;
      }),
    });
  }
  /**
   * Счет количества выделений пункта
   * @param code
   */
  getClickCount(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item =>
        item.code === code
          ? { ...item, totalSelectClickCount: item.totalSelectClickCount + 1 }
          : item,
      ),
    });
  }

  declension(int, array) {
    return (
      (array = array || ['раз', 'раза', 'раз']) &&
      array[int % 100 > 4 && int % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]]
    );
  }
}

export default Store;
