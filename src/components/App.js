import React, {Component, Fragment} from 'react';
import Nav from './Nav'
import {connect} from 'react-redux'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import SignUp from './SignUp'
import QuestionData from './QuestionData'
import NotFound from './NotFound'
import {handleRecieveUsers} from '../actions'
import Loading from './Loading'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleRecieveUsers())
  }

  render() {
    const {loading} = this.props
    return (
      <Fragment>
        <Nav />
        <main>
          {loading?<Loading/>:
            <div>
              <Switch>
                <Route path="/" exact>
                  <Home /> 
                </Route>
                <Route path="/signin" exact>
                  <SignIn />
                </Route>
                <Route path="/signup" exact>
                  <SignUp />
                </Route>
                <Route path="/add" exact>
                  <NewQuestion /> 
                </Route>
                <Route path="/leaderboard" exact>
                  <LeaderBoard /> 
                </Route>
                <Route path="/questions/:question_id" exact  component={QuestionData}/>
                <Route  component={NotFound} />
              </Switch>  
            </div>
          }
        </main>
      </Fragment>
      
    )
  } 
}

export default connect(({loading}) => ({loading}))(App)
