import style from '../../../../styles/stylesDialogsPage/MessageForm.module.scss';
import styleError from '../../../../styles/stylesError/Error.module.scss';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import { sendMessage } from '../../../../redux/dialogsReducer';

const MessageForm = memo(() => {

	const dispatch = useDispatch();

	const sendNewMessage = useCallback((newMessageBody) => {
		dispatch(sendMessage(newMessageBody));
	}, [dispatch]);

	const schema = yup.object().shape({
		newMessageBody: yup.string()
			.max(50, 'Must be 50 characters or less')
	});

	return (
		<div className={style.messageForm}>
			<Formik
				initialValues={{
					newMessageBody: '',
				}}
				onSubmit={(values) => {
					sendNewMessage(values.newMessageBody);
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
								className={errors.newMessageBody && touched.newMessageBody ? styleError.error : null}
							/>
							{errors.newMessageBody && touched.newMessageBody
								? (<span className={styleError.errorMessage + ' ' + styleError.errorMessageTextarea}>
									{errors.newMessageBody}</span>) : null}
						</div>
						<div className={style.sendMessageButton}>
							<button
								type={'submit'}
								className={dirty && isValid ? "" : styleError.disabledBtn}
								disabled={!isValid && dirty}
								onClick={handleSubmit}
							>Submit</button>
						</div>
					</div>
				)
				}
			</Formik>
		</div>
	);
});

export default MessageForm;