import style from '../../../styles/stylesDialogsPage/Message.module.scss';
import Inbox from './Inbox/Inbox';
import Outbox from './Outbox/Outbox';
import React, { memo } from 'react';
import MessageForm from './MessageForm/MessageForm';
import { useSelector } from 'react-redux';
import { getMassages } from '../../../redux/dialogs-selectors';

const Message = memo(() => {

	const messages = useSelector(getMassages);

	let inMessages = messages.incomingMessages.map(i => <Inbox inMessage={i.message} avatar={i.avatar} key={i.id} />);
	let outMessages = messages.outboundMessages.map(o => <Outbox outMessage={o.message} avatar={o.avatar} key={o.id} />);

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
			<MessageForm />
		</div>
	);
});

export default Message;