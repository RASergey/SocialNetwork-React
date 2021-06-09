import style from './Message.module.css';
import Inbox from './Inbox/Inbox';
import Outbox from './Outbox/Outbox';
import React from 'react';
import MessageForm from './MessageForm/MessageForm';

const Message = ({ sendMessage, messages }) => {

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
			<MessageForm sendMessage={sendMessage} />
		</div>
	)
}

export default Message;