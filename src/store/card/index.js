import item from '../../components/item';
import StoreModule from '../module';

class Card extends StoreModule {
  constructor(store, name) {
    super(store, name);
  }
  initState() {
    return {
      item: {},
    };
  }

  async load(id) {
    try {
      const response = await fetch(`/api/v1/articles/${id}`);
      const json = await response.json();

      this.setState(
        {
          item: json.result,
        },
        `Загружен товар ${id}`,
      );
    } catch (error) {
      console.error(`Ошибка при загрузке товара ${id}:`, error);
    }
  }
}

export default Card;
