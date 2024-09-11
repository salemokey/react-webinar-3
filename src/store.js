/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
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
    const countListItems = this.state.list.length;
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: countListItems + 1, title: 'Новая запись', totalSelectClickCount: 0 }],
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
 * Счет количества выделения пункта
 * @param code 
 */
  getClickCount(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item =>
        item.code === code ? { ...item, totalSelectClickCount: item.totalSelectClickCount + 1} : item,
      ),
    });
  }
}

export default Store;
