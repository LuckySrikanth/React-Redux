import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';


const Auth = () => {
  const Dispatch = useDispatch()

  const loginhanlder = (event) => {
    event.preventDefault()
    Dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginhanlder}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
