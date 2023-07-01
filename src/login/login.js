import './login.css'
import Button from '../Button'
function Login() {
    return (
        <div className='login-container'>
            <form className='form-cont'>
                <label>
                    User Name:
                    <input type="text"/>
                </label>
               
                <label>
                    Password:
                    <input type="text"/>
                </label>
                
                <Button btnName="Login"/>
            </form>
        </div>
    );
}
export default Login;