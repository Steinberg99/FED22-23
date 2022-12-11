 export default class Search {
  constructor() {
    // Set scope
    const scope = document.body;

    this.boundToggleSearch = (e) => this.toggleSearch(e);

    this.openSearchButton = scope.querySelector('.open-search-button');
    this.searchForm = scope.querySelector('search-form');
  }

  init() {
    if (this.openSearchButton) {
      this.openSearchButton.addEventListener('click', this.boundToggleSearch);
    }
  }

  toggleSearch(e) {
    e.preventDefault();

    // Toggle the thumbnail
    this.searchForm.classList.toggle('search-form-show');
  }
}
