import style from '../../../styles/stylesLoginPage/LoginForm.module.scss';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../redux/authReducer';
import { memo, useCallback } from 'react';
import { createForm } from '../../common/FormsControls/FormsControls';

const LoginForm = memo(() => {
	const schema = yup.object().shape({
		email: yup.string()
			.email('Invalid email')
			.required('required'),
		password: yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(12, 'Must be 12 characters or less')
			.required('required'),
		// confirmPassword: yup.string()
		// 	.oneOf([yup.ref('password')], 'Passwords don\'t match')
		// 	.min(3, 'Must be 3 characters or more')
		// 	.max(12, 'Must be 12 characters or less')
		// 	.required('required')
	});
	const inputs = [
		{ nameInput: 'email', typeInput: 'input', initialValues: '' },
		{ nameInput: 'password', typeInput: 'input', initialValues: '' },
		{ nameInput: 'Remember Me', typeInput: 'checkbox', initialValues: false }
	];

	const dispatch = useDispatch();

	const submitSetLogin = useCallback((values) => {
		dispatch(setLogin(values));
	}, [dispatch]);

	return (
		<div className={style.form}>
			{createForm(inputs, submitSetLogin, schema, 'Login')}
		</div>
	);
});

export default LoginForm;