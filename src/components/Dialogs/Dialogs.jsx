import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} avatar={d.avatar} id={d.id} />);
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<h2 className={s.title}>Dialogs</h2>
				<div className={s.dialogsRow}>
					{dialogsElements}
				</div>
			</div>
			<div className={s.allMessages}>
				<Message
					messages={props.state.messages}
					newMessageBody={props.state.newMessageBody}
					dispatch={props.dispatch}
				/>
			</div>
		</div>
	);
}

export default Dialogs;