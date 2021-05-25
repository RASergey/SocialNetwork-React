import { Field, reduxForm } from 'redux-form';
import style from './Login.module.css';

const LoginForm = (props) => {
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div>
				<Field component={'input'} type='text' name={'login'} placeholder='Email' tabIndex='1' />
			</div>
			<div>
				<Field component={'input'} type='password' name={'password'} placeholder='Password' tabIndex='2' />
			</div>
			<div className={style.checkbox}>
				<label>
					<Field component={'input'} type='checkbox' name={'rememberMe'} tabIndex='3' />
					Remember me
				</label>
			</div>
			<div>
				<button tabIndex='4'>Sign in</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.setLogin(formData);
	}

	return (
		<div className={style.formWrapper}>
			<h2 className='title'>Sign in</h2>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login;