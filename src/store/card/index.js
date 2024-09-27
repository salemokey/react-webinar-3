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
      const response = await fetch(
        `/api/v1/articles/${id}?fields=title,description,price,madeIn(title,code),category(title)`,
      );
      const json = await response.json();

      this.setState(
        {
          ...this.getState(),
          item: {
            title: json.result.title,
            description: json.result.description,
            price: json.result.price,
            madeIn: json.result.madeIn.title,
            category: json.result.category.title,
          },
        },
        `Загружен товар ${id}`,
      );
    } catch (error) {
      console.error(`Ошибка при загрузке товара ${id}:`, error);
    }
  }
}

export default Card;
