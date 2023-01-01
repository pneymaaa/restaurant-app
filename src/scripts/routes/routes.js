import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Fav from '../views/pages/fav';

const routes = {
  '/': List,
  '/detail/:id': Detail,
  '/fav': Fav,
};

export default routes;
