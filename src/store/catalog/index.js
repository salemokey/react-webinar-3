import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
    this.currentPage = 0;
    this.itemsPerPage = 10;
    this.pages = [];
    this.totalItems = 0;
  }

  initState() {
    return {
      list: [],
      pages: [],
    };
  }
  pagesCount() {
    let lastIndexPage = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = [];
    for (let i = 1; i <= lastIndexPage; i++) {
      this.pages.push(i);
    }
    this.setState({ ...this.getState(), pages: this.pages });
  }

  onChangePage(page) {
    this.currentPage = page === 1 ? 0 : page - 1;
    this.load();
    console.log(this.currentPage);
  }

  async load() {
    const skip = this.currentPage * this.itemsPerPage;
    const response = await fetch(
      `api/v1/articles?limit=${this.itemsPerPage}&skip=${skip}&fields=items(_id,%20title,%20price),count`,
    );
    const json = await response.json();
    this.totalItems = json.result.count;
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
      },
      'Загружены товары из АПИ',
    );
    this.pagesCount();
  }
}

export default Catalog;
