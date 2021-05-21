import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessageContainer from './Message/MessageContainer';

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map(d =>
		<DialogsItem name={d.name} avatar={d.avatar} id={d.id} key={d.id} />);

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				<h2 className='title'>Dialogs</h2>
				<div className={style.dialogsRow}>
					{dialogsElements}
				</div>
			</div>
			<div className={style.allMessages}>
				<MessageContainer />
			</div>
		</div>
	)
}

export default Dialogs;