import React, {useState} from 'react';
import { GoogleLogin, GoogleLogout} from 'react-google-login';

export default function Login(){
    const clientId = "288159598515-k29hpnfkvfmull4eupub3rcrrgkg7352.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (response) =>{
        console.log('Login success', response.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    };

    const onFailureSuccess = (response) => {
        console.log('Login failed', response);
    };

    const onSignoutSuccess = () => {
        alert("You have been signed out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);
        console.clear();
    }


    return(
        <div>
            {showLoginButton ? 
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onFailureSuccess}
                    cookiePolicy={'single_host_origin'}
                /> : null}

            {showLogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    )
}

