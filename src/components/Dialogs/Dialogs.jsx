import { memo } from 'react';
import { useSelector } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getDialogs } from '../../redux/dialogs-selectors';
import style from '../../styles/stylesDialogsPage/Dialogs.module.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = memo(() => {

	const dialogs = useSelector(getDialogs);

	let dialogsElements = dialogs.map(d =>
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
				<Message />
			</div>
		</div>
	);
});

export default withAuthRedirect(Dialogs);