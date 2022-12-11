import Search from './search';

const init = () => {
  const search = new Search();

  search.init();
};

window.addEventListener('load', init);
