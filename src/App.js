import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.scss';

//import components
import './components/fontAwesomeIcons';
import Home from './components/home/Home';
import ApiPage from './components/products/apiPage/ApiPage';
import UrbanEnginePage from './components/products/urbanEngine/UrbanEnginePage';
import Pricing from './components/pricing/Pricing';
import Rupantor from './components/products/rupantor/Rupantor';
import SearchHome from './components/searchHome/SearchHome';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Switch>
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/api' component={ApiPage} />
          <Route exact path='/urban-engine' component={UrbanEnginePage} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/rupantor' component={Rupantor} /> */}
          <Route exact path='/' component={SearchHome} />
        </Switch>
      </Fragment>
    </Provider>
  );
};

export default App;
