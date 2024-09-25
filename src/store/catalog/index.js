import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
    this.currentPage = 0;
    this.itemsPerPage = 10;
  }

  initState() {
    return {
      list: [],
      pages: [],
    };
  }
  pagesCount() {
    this.currentPage = 0;
    let pages = [];
    let lastIndexPage = this.currentPage + 50;
    for (let i = 1; i <= lastIndexPage; i++) {
      pages.push(i);
    }
    this.setState({ ...this.getState(), pages: pages });
    console.log(this.pages);
  }

  async load() {
    const response = await fetch(
      `api/v1/articles?limit=${this.itemsPerPage}&skip=${this.currentPage}`,
    );
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
      },
      'Загружены товары из АПИ',
    );
  }
}

export default Catalog;
