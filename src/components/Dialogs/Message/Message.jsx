import s from './Message.module.css';
import Inbox from './Inbox/Inbox';
import Outbox from './Outbox/Outbox';
import React from 'react';

const Message = (props) => {
	let inMessages = props.messages.incomingMessages.map(i => <Inbox inMessage={i.message} avatar={i.avatar} key={i.id} />);
	let outMessages = props.messages.outboundMessages.map(o => <Outbox outMessage={o.message} avatar={o.avatar} key={o.id} />);

	let onSendMessageClick = () => props.sendMessage();
	let onNewMessageChange = (e) => props.updateNewMessageBody(e.target.value);

	return (
		<div className={s.windowMassages}>
			<div className={s.messages}>
				<div className={s.inMessages}>
					{inMessages}
				</div>
				<div className={s.outMessages}>
					{outMessages}
				</div>
			</div>
			<div className={s.sendMessage}>
				<textarea value={props.newMessageBody} onChange={onNewMessageChange} placeholder='Enter your massage' />
				<button onClick={onSendMessageClick}>Send</button>
			</div>
		</div>
	)
}

export default Message;