import s from './Inbox.module.css';

const Inbox = (props) => {

	return (
		<div className={s.message}>
			<img className={s.avatar} src={props.avatar} alt="avatar" />
			<span className={s.text}>{props.inMessage}</span>
		</div>
	)
}

export default Inbox;