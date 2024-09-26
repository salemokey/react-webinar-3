import item from '../../components/item';
import StoreModule from '../module';

class ItemPage extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.itemCode = null;
  }
  initState() {
    return {
      item: {},
    };
  }

  onSelectItem(code) {
    this.itemCode = code;
    this.load();
  }

  async load() {
    let itemCode = this.itemCode;
    if (!itemCode) {
      console.error('itemCode is not set');
      return; // или выбросьте ошибку
    }
    const response = await fetch(`api/v1/articles/${itemCode}`);
    const json = await response.json();
    const itemRes = json.result;
    console.log(item);
    this.setState(
      {
        ...this.getState(),
        item: itemRes,
      },
      'Загружен товар',
    );
  }
}

export default ItemPage;
