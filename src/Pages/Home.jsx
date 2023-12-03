import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onLoginClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/login")
        }

    }
    const onRegisterClick = () => {
        navigate("/register")
    }

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the home page.
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onLoginClick}
                value={loggedIn ? "Log out" : "Log in"} />

                {!loggedIn? <input
                className={"inputButton"}
                type="button"
                onClick={onRegisterClick}
                value={"Register"} />:<div /> }
                
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>


    </div>
}

export default Home
