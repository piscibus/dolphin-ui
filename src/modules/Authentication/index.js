
import React from 'react'
import Login from './components/Login/Login'

class index extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <div className='auth-wrapper'>
                <Login/>
            </div>
        )
    }
}

export default index
