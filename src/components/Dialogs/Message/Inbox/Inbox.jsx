import style from './Inbox.module.css';

const Inbox = (props) => {

	return (
		<div className={style.message}>
			<img className={style.avatar} src={props.avatar} alt="avatar" />
			<span className={style.text}>{props.inMessage}</span>
		</div>
	)
}

export default Inbox;