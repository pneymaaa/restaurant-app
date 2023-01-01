import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ content, button, drawer }) {
    this._content = content;
    this._button = button;
    this._drawer = drawer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    // ReadMoreInitiator
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipMainElem = document.querySelector('.skip-main');
    skipMainElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#home').focus();
    });
  }
}

export default App;
