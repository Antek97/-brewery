import React, { PureComponent } from 'react';
import { AppContext, defaultObiect } from './State/AppContext';

import Guest from './test';

import Menu from './App/menu';

class App extends PureComponent {
  state = {
    usserLogged: defaultObiect.usserLogged,
    id: defaultObiect.id,
    name: defaultObiect.name,
   }

  render() { 
    return ( 
      // <Guest/>
      <AppContext.Provider value={{
        test: this.state.test,
        usserLogged: this.state.usserLogged,
        id: this.state.id,
        name: this.state.name,
        }}>
        <Menu/>
      </AppContext.Provider>
     );
  }
}
 
export default App;
