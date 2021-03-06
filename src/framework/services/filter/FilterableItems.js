
export default class FilterableItems {

  constructor(items) {
    this.items = items;
  }

  applyFilters(filters) {
    return this.items.filter(item => (
      filters.every(filter => filter.doesItemPass(item))
    ));
  }

}
