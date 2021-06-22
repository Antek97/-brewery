import React, { PureComponent } from 'react';
import { AppContext, defaultObiect } from './State/AppContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import Menu from './App/menu';

class App extends PureComponent {
  state = {
    usserLogged: defaultObiect.usserLogged,
    id: defaultObiect.id,
    name: defaultObiect.name,
   }

  render() { 
    return ( 
        <AppContext.Provider value={{
          test: this.state.test,
          usserLogged: this.state.usserLogged,
          id: this.state.id,
          name: this.state.name,
          }}>
            <Router>
              <Menu/>
            </Router>
        </AppContext.Provider>
     );
  }
}
 
export default App;
