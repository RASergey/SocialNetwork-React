import { useSelector } from 'react-redux';
import style from './Login.module.css';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm/LoginForm';
import { memo } from 'react';
import { getIsAuth } from '../../redux/autch-selectors';

const Login = memo(() => {

	const isAuth = useSelector(getIsAuth);

	if (isAuth) {
		return (
			<Redirect to={'/profile'} />
		)
	}

	return (
		<div className={style.formWrapper}>
			<h2 className='title'>Sign in</h2>
			<LoginForm />
		</div>
	)

});

export default Login;