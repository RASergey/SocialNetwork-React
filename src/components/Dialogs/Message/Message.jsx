import style from './Message.module.css';
import Inbox from './Inbox/Inbox';
import Outbox from './Outbox/Outbox';
import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Element } from '../../common/FormsControls/FormsContols';
import { maxLength, required } from '../../../utils/validators/validators';

const Textarea = Element('textarea');
const maxLength100 = maxLength(100);

const Message = (props) => {
	let inMessages = props.messages.incomingMessages.map(i => <Inbox inMessage={i.message} avatar={i.avatar} key={i.id} />);
	let outMessages = props.messages.outboundMessages.map(o => <Outbox outMessage={o.message} avatar={o.avatar} key={o.id} />);

	const addNewMessage = (values, dispatch) => {
		props.sendMessage(values.newMessageBody);
		dispatch(reset('dialogAddMessageForm'));
	}

	return (
		<div className={style.windowMassages}>
			<div className={style.messages}>
				<div className={style.inMessages}>
					{inMessages}
				</div>
				<div className={style.outMessages}>
					{outMessages}
				</div>
			</div>
			<OutMessageReduxForm onSubmit={addNewMessage} />
		</div>
	)
}

const AddMessageForm = (props) => {
	return (
		<form className={style.sendMessage} onSubmit={props.handleSubmit}>
			<div className={style.sendMessageText}>
				<Field
					component={Textarea}
					name='newMessageBody'
					placeholder='Enter your massage'
					validate={[required, maxLength100]} />
			</div>
			<div className={style.sendMessageButton}>
				<button>Send</button>
			</div>
		</form>
	)
}

const OutMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Message;