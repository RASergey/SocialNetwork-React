import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessageContainer from './Message/MessageContainer';

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map(d =>
		<DialogsItem name={d.name} avatar={d.avatar} id={d.id} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<h2 className={s.title}>Dialogs</h2>
				<div className={s.dialogsRow}>
					{dialogsElements}
				</div>
			</div>
			<div className={s.allMessages}>
				<MessageContainer store={props.store} />
			</div>
		</div>
	)
}

export default Dialogs;