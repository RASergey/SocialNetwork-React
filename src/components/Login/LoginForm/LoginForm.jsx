import { Field, Form, Formik } from 'formik';
import style from './LoginForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../redux/authReducer';
import { memo, useCallback } from 'react';

const LoginForm = memo(() => {

	const dispatch = useDispatch();

	const submitSetLogin = useCallback((values) => {
		dispatch(setLogin(values));
	}, [dispatch]);

	const schema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email')
			.required('Обязательное поле'),
		password: Yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(12, 'Must be 12 characters or less')
			.required('Обязательное поле')
	});

	return (
		<div className={style.containerForm}>
			<Formik
				initialValues={{
					email: '',
					password: '',
					rememberMe: false
				}}
				onSubmit={values => {
					submitSetLogin(values);
				}}
				validationSchema={schema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<Form className={style.form} >
						<div className={errors.email && touched.email ? style.error : null}>
							<input
								type={'text'}
								name={'email'}
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								tabIndex={'1'}
							/>
							{errors.email && touched.email ? (<span className={style.errorMessage}>{errors.email}</span>) : null}
						</div>
						<div className={errors.password && touched.password ? style.error : null}>
							<input
								type={'password'}
								name={'password'}
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								className={errors.password && touched.password ? style.error : null}
								tabIndex={'2'}
							/>
							{errors.password && touched.password ? (<span className={style.errorMessage}>{errors.password}</span>) : null}
						</div>
						<div className={style.checkbox}>
							<Field
								type={'checkbox'}
								name={'rememberMe'}
								id={'checkInput'}
							/>
							<label htmlFor={'checkInput'} tabIndex={'3'}></label>
						</div>
						<button
							type={'submit'}
							className={dirty && isValid ? "" : style.disabledBtn}
							disabled={!isValid && dirty}
							onClick={handleSubmit}
							tabIndex={'3'}>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)

});

export default LoginForm;