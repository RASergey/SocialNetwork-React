import style from '../../../styles/styleFormsControls/FormsControls.module.scss';
import { Formik, Field, Form } from 'formik';

export const createForm = (inputs, createAction, schema, nameButton) => {

	const initialValues = {}
	inputs.forEach(i => initialValues[`${i.nameInput}`] = i.initialValues);

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => {
				createAction(values);
			}}
			validationSchema={schema}
		>
			{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
				<Form>
					{
						inputs.map((input, index) => (
							input.typeInput !== 'checkbox'
								? <div key={index}>
									<Field
										type={input.nameInput}
										as={input.typeInput}
										name={input.nameInput}
										value={values[`${input.nameInput}`]}
										onChange={handleChange}
										onBlur={handleBlur}
										tabIndex={`${index + 1}`}
										className={errors[`${input.nameInput}`] && touched[`${input.nameInput}`] ? style.error : null}
									/>
									{errors[`${input.nameInput}`] && touched[`${input.nameInput}`]
										? (<span className={style.errorMessage}>
											{errors[`${input.nameInput}`]}</span>) : null}
								</div>
								: <div key={index}>
									<Field
										type={input.typeInput}
										name={input.nameInput}
										id={input.nameInput}
										className={style.checkbox}
									/>
									<label htmlFor={input.nameInput} tabIndex={`${index + 1}`}>{input.nameInput}</label>
								</div>
						))
					}
					<button
						type={'submit'}
						className={dirty && isValid ? "" : style.disabledBtn}
						disabled={!isValid && dirty}
						onClick={handleSubmit}
						tabIndex={inputs.length}>{nameButton}</button>
				</Form>
			)}
		</Formik>
	);
};