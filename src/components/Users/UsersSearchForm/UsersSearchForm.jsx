import style from '../../../styles/stylesUsersPage/UsersSearchForm.module.scss';
import styleError from '../../../styles/stylesError/Error.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { memo } from 'react';

const UsersSearchForm = memo(({ onFilterChanged }) => {

	const schema = yup.object().shape({
		term: yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(20, 'Must be 20 characters or less')
	});

	return (
		<div className={style.usersSearchForm}>
			<Formik
				initialValues={{
					term: ''
				}}
				onSubmit={(values, { setSubmitting }) => {
					onFilterChanged(values);
					setSubmitting(false);
				}}
				validationSchema={schema}
			>
				{({ isSubmitting, values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<Form>
						{errors.term && touched.term
							? (<span className={styleError.errorMessage + ' ' + styleError.errorMessageFind}>
								{errors.term}</span>) : null}
						<input
							type={'text'}
							name={'term'}
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.term && touched.term ? styleError.error : null} />
						<button
							type='submit'
							className={dirty && isValid ? "" : styleError.disabledBtn}
							disabled={isSubmitting}
							onClick={handleSubmit}
						>Find</button>
					</Form>
				)}
			</Formik>
		</div>
	);
});

export default UsersSearchForm;