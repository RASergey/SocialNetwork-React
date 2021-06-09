import { Field, Form, Formik } from 'formik';
import { memo } from 'react';
import style from './UsersSearchForm.module.css';

const usersSearchFormValidate = () => {
	const errors = {};
	return errors;
};

const UsersSearchForm = memo(({ onFilterChanged }) => {

	const submit = (values, { setSubmitting }) => {
		onFilterChanged(values);
		setSubmitting(false);
	};

	return (
		<div className={style.usersSearchForm}>
			<Formik
				initialV alues={{ term: '' }}
				validate={usersSearchFormValidate}
				onSubmit={submit}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field type='text' name='term' />
						<button type='submit' disabled={isSubmitting}>Find</button>
					</Form>
				)}
			</Formik>
		</div>
	)

});

export default UsersSearchForm;