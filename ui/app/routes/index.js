'use strict';

import Splash from '../pages/banners/Splash';

const rootRoute = {
   childRoutes: [
      {
         path: '/',
         component: require('../pages/BasePage').default
      },
      {
         path: '/splash',
         component: Splash,
      },
      require('./AboutRoute').default
   ]
};

export default rootRoute;
