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
import Loading from './Loading'
import {Route} from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleRecieveUsers())
  }
  render() {
    const {authedUser, loading} = this.props
    return (
      <Fragment>
        <Nav />
        <main>
          {loading?<Loading/>:!authedUser.id?<SignIn />:
            <div>
              <Route path="/" exact>
                <Home /> 
              </Route>
              <Route path="/add" exact>
                <NewQuestion /> 
              </Route>
              <Route path="/leaderboard" exact>
                <LeaderBoard /> 
              </Route>
              <Route path="/questions/:question_id" exact  component={QuestionData}/>
            </div>
          }
          
          {/* <SignIn /> */}
          {/* <NewQuestion /> */}
          {/* <Home /> */}
          {/* <LeaderBoard /> */}
          {/* <QuestionData /> */}
        </main>
      </Fragment>
      
    )
  } 
}

export default connect(({authedUser, loading}) => ({authedUser, loading}))(App)
