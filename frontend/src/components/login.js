import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import api from '../services/api';

const Login = () => {
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
    const [cookies, setCookie] = useCookies();
    let history = useHistory();
    const handleLogin = (e) => {
        e.preventDefault();
       try{
            api.post('/users/login',{inputEmail, inputPassword}).then(res => {
                if(res.status === 200){
                    setCookie('userJWT', res.data.userJWT);
                    setCookie('address', res.data.address);
                    setCookie('userType',res.data.userType);
                    history.push('/dashboard');
                }else{
                    history.push('/invalid',{message: 'Invalid username/password'});

                }
            })
       }
       catch(e){
           console.log(e);
           throw e;
       }
      
    }
    const setEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const setPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="text-center col-sm-6 col-offset-2">
                    <form className="form-signin">
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label className="sr-only">Email address</label>
                        <input type="text" id="inputEmail"  name="inputEmail" className="form-control" placeholder="Username" required autoFocus onChange={setEmailChange}/>
                        <label className="sr-only">Password</label>
                        <input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" required onChange={setPasswordChange} />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit"  onClick={handleLogin} >Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
