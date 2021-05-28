import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/FormsContols';
import { maxLength, minLength, required } from '../../utils/validators/validators';
import style from './Login.module.css';
import styleError from '../common/FormsControls/FormsControls.module.css';
import { setLogin } from '../../redux/authReducer';
import { Redirect } from "react-router";

const Input = Element('input');
const maxLength30 = maxLength(30);
const minLength1 = minLength(3);

const LoginForm = (props) => {
	return (
		<form className={style.form + ' ' + (props.error ? styleError.error : null)} onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Input}
					type='email'
					name={'email'}
					placeholder='Email'
					validate={[required, maxLength30, minLength1]}
					tabIndex='1' />
			</div>
			<div>
				<Field
					component={Input}
					type='password'
					name={'password'}
					placeholder='Password'
					validate={[required, maxLength30, minLength1]}
					tabIndex='2' />
			</div>
			<div className={style.checkbox}>
				<Field
					component='input'
					id='checkInput'
					type='checkbox'
					name={'rememberMe'}
					tabIndex='3' />
				<label htmlFor='checkInput'></label>
			</div>
			{ props.error &&
				<span>{props.error}</span>
			}
			<div>
				<button tabIndex='4'>Sign in</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.setLogin(formData);
	}

	if (props.isAuth) {
		return (
			<Redirect to={'/profile'} />
		)
	}

	return (
		<div className={style.formWrapper}>
			<h2 className='title'>Sign in</h2>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setLogin })(Login);