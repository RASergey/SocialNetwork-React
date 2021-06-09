import { Formik } from 'formik';
import style from './MessageForm.module.css';
import * as Yup from 'yup';

const MessageForm = ({ sendMessage }) => {

	const schema = Yup.object().shape({
		newMessageBody: Yup.string()
			.max(50, 'Must be 50 characters or less')
	});

	return (
		<div className={style.messageForm}>
			<Formik
				initialValues={{
					newMessageBody: '',
				}}
				onSubmit={(values) => {
					sendMessage(values.newMessageBody);
				}}
				validationSchema={schema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<div className={style.sendMessage}>
						<div className={style.sendMessageText}>
							<textarea
								type={'text'}
								name={'newMessageBody'}
								value={values.newMessageBody}
								onChange={handleChange}
								onBlur={handleBlur}
								className={errors.newMessageBody && touched.newMessageBody ? style.error : null}
							/>
							{errors.newMessageBody && touched.newMessageBody ? (<span className={style.errorMessage}>{errors.newMessageBody}</span>) : null}
						</div>
						<div className={style.sendMessageButton}>
							<button
								type={'submit'}
								className={dirty && isValid ? "" : style.disabledBtn}
								disabled={!isValid && dirty}
								onClick={handleSubmit}
							>Submit</button>
						</div>
					</div>
				)
				}
			</Formik>
		</div>
	)
}

export default MessageForm;