import React, {Component} from 'react'

class Nav extends Component {
    render() {
        return (
            <nav>
                <div class="nav-container">
                    <ul class="nav-options">
                        <li class="button">Home</li>
                        <li class="button">New Question</li>
                        <li class="button">Leader Board</li>
                    </ul>
                    <ul class="nav-user">
                        <li>Hello, Omar</li>
                        <li><img src="https://tylermcginnis.com/would-you-rather/tyler.jpg" alt=""/></li>
                        <li class="button">Sign Out</li>
                        
                    </ul>
                </div>
                
            </nav>
            
        )
    }
}
export default Nav;