import React, {Component, Fragment} from 'react';
import Nav from './Nav'
import {connect} from 'react-redux'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import QuestionData from './QuestionData'
import {authUser} from '../actions/authedUser'
import {handleRecieveUsers} from '../actions/users'
import {handleRecieveQuestions} from '../actions/questions'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleRecieveUsers())
    this.props.dispatch(handleRecieveQuestions())
  }
  render() {
    return (
      <Fragment>
        <Nav />
        <main>
          {/* <SignIn /> */}
          {/* <NewQuestion /> */}
          <Home />
          {/* <LeaderBoard /> */}
          {/* <QuestionData /> */}
        </main>
      </Fragment>
      
    )
  } 
}

export default connect()(App)
