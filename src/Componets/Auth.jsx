
import { auth, GoogleProvider } from "../Config/Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const Auth = () => {

    const navigate = useNavigate(); // Get the navigate function from useNavigate hook

    const SignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, GoogleProvider);
            console.log(result);
            // Check if the user and stsTokenManager are defined
            if (result.user && result.user.stsTokenManager) {
                // Retrieve the ID token from the stsTokenManager
                const idToken = result.user.stsTokenManager.accessToken;
                localStorage.setItem("FirebaseToken", idToken);
                
                // Navigate to the UserPage after successful sign-in
                navigate('/UserPage');
            } else {
                console.error('No user or stsTokenManager found in the sign-in result');
            }
        } catch (error) {
            console.log(error);
        }
    }
    const LogOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("FirebaseToken");
        } catch (error) {
            console.log(error);
        }
    };

    const buttonStyle = {
        backgroundColor: 'red', // Google brand color
        color: 'white',
        borderRadius: '8px',
        padding: '8px  16px',
        fontSize: '15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        outline: 'none',
        boxShadow: '0  2px  4px rgba(0,  0,  0,  0.2)'
    };

    return (
        <div>
            <button style={buttonStyle} onClick={SignInWithGoogle}>
                <i className="fa-brands fa-google"></i> Sign in with Google
            </button>
            <button onClick={LogOut} style={buttonStyle}>
                <i className="fa-brands fa-google"></i> Sign out
            </button>
        </div>
    );
};