import style from '../../../../styles/stylesDialogsPage/MessageForm.module.scss';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import { sendMessage } from '../../../../redux/dialogsReducer';
import { createForm } from '../../../common/FormsControls/FormsControls';

const MessageForm = memo(() => {
	const schema = yup.object().shape({
		sendMessage: yup.string()
			.max(50, 'Must be 50 characters or less'),
	});
	const inputs = [
		{ nameInput: 'sendMessage', typeInput: 'textarea', initialValues: '' },
	];

	const dispatch = useDispatch();

	const sendNewMessage = useCallback((value) => {
		dispatch(sendMessage(value.sendMessage));
	}, [dispatch]);

	return (
		<div className={style.messageForm}>
			{createForm(inputs, sendNewMessage, schema, 'Send')}
		</div>
	);
});

export default MessageForm;