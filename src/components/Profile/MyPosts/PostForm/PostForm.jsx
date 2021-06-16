import style from '../../../../styles/stylesProfilePage/PostForm.module.scss';
import styleError from '../../../../styles/stylesError/Error.module.scss'
import * as yup from 'yup';
import { Formik } from 'formik';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../../redux/profileReducer';

const PostForm = memo(() => {

	const disppatch = useDispatch();

	const addNewPost = useCallback((value) => {
		disppatch(addPost(value));
	}, [disppatch]);

	const schema = yup.object().shape({
		name: yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(50, 'Must be 50 characters or less')
	});

	return (
		<div className={style.yourNews}>
			<Formik
				initialValues={{
					name: '',
				}}
				onSubmit={(values) => {
					addNewPost(values.name);
				}}
				validationSchema={schema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<div>
						<textarea
							type={'text'}
							name={'name'}
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.name && touched.name ? styleError.error : null}
						/>
						{errors.name && touched.name
							? (<span className={styleError.errorMessage + ' ' + styleError.errorMessageTextarea}>
								{errors.name}</span>) : null}
						<button
							type={'submit'}
							className={dirty && isValid ? "" : styleError.disabledBtn}
							disabled={!isValid && dirty}
							onClick={handleSubmit}
						>Submit</button>
					</div>
				)}
			</Formik>
		</div>
	);
});

export default PostForm;