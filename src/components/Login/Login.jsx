import style from '../../styles/stylesLoginPage/Login.module.scss';
import LoginForm from './LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { memo } from 'react';
import { getIsAuth } from '../../redux/autch-selectors';

const Login = memo(() => {

	const isAuth = useSelector(getIsAuth);

	if (isAuth) {
		return (
			<Redirect to={'/profile'} />
		);
	};

	return (
		<div className={style.formWrapper}>
			<h2 className='title'>Sign in</h2>
			<LoginForm />
		</div>
	);
});

export default Login;