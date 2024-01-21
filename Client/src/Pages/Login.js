import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);

    }

    return (
       
        <>
         
            {success ? (
                <section className='after-log-in'>
                    <h1 className='after-log-in-head'>Login Successful !</h1>
                    <br />
                    <p>
                    <Link to="/">Go to Home</Link>
                    </p>
                </section>
            ) : (
                <section className='inner-sec'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='Login-head'>Have an Account Login !</h1>
                    <form className='log-form' onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='login-but'>LOGIN</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <Link to="/register">Sign Up</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login