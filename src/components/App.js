import React from 'react'
import './reset.css'
import './App.scss'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
const App = () => {
    return (
        <>
            <div className='container'>
                {/* <SignUp /> */}
                <Login />
            </div>
        </>
    )
}

export default App