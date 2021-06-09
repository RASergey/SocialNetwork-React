import style from './Inbox.module.css';

const Inbox = ({ avatar, inMessage }) => {

	return (
		<div className={style.message}>
			<img className={style.avatar} src={avatar} alt='avatar' />
			<span className={style.text}>{inMessage}</span>
		</div>
	)

};

export default Inbox;