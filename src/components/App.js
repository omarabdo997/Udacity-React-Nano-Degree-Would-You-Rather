import React, {Component, Fragment} from 'react';
import Nav from './Nav'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'
import Home from './Home'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <main>
          {/* <SignIn /> */}
          {/* <NewQuestion /> */}
          <Home />
        </main>
      </Fragment>
      
    )
  } 
}

export default App;
