import React, {Component} from 'react'
import logo from '../wouldyourather4.jpg'
import noImage from '../no-image.jpg'
import {handleAddUser} from '../actions'
import {connect} from 'react-redux'
import {removeMssg} from '../actions/messages'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
    state = {
        username: '',
        name: '',
        url: ''
    }
    handleImg = (e) => {
        const image = e.target.files[0]
        if (image.type.includes('image')){
            this.setState({
                url: URL.createObjectURL(image)
            })
        }        
    }
    handleUsernameChange = (e) => {
        const value = e.target.value
        this.props.dispatch(removeMssg())
        this.setState({
            username: value
        })
    }
    handleNameChange = (e) => {
        const value = e.target.value
        this.setState({
            name: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {name, username, url} = this.state
        const user = {
            name,
            url,
            username
        }
        this.props.dispatch(handleAddUser(user))


    }
    render() {
        const {url, username, name} = this.state
        const {messages} = this.props
        if(messages.redirect) return <Redirect to='/signin' />
        return (
            <div className='signin-container'>
                <img className="logo" src={logo} alt="logo"/>
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" value={username} 
                        onChange={this.handleUsernameChange}
                    />
                    {messages.error?<p style={{color: 'red', width:'100%'}}>{messages.error}</p>:null}
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="name" value={name} 
                        onChange={this.handleNameChange}
                    />
                    <label htmlFor="avatar">Avatar</label>
                    
                    <input  
                        type="file" 
                        name="avatar" 
                        id="avatar" 
                        accept="image/*" 
                        onChange={this.handleImg}
                    />
                    <img className="avatar" alt='avatar' src={url?url:noImage} />
                    
                    <button disabled={!username || !name} className='signin-button push' type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default connect(({messages})=>({messages}))(SignUp)