import { Form, Formik } from 'formik';
import { memo } from 'react';
import style from './UsersSearchForm.module.scss';
import * as Yup from 'yup';

const UsersSearchForm = memo(({ onFilterChanged }) => {

	const schema = Yup.object().shape({
		term: Yup.string()
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
						{errors.term && touched.term ? (<span className={style.errorMessage}>{errors.term}</span>) : null}
						<input
							type={'text'}
							name={'term'}
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.term && touched.term ? style.error : null} />
						<button
							type='submit'
							className={dirty && isValid ? "" : style.disabledBtn}
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