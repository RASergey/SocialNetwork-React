import s from './Outbox.module.css';

const Outbox = (props) => {

	return (
		<div className={s.message}>
			<span className={s.text}>{props.outMessage}</span>
			<img className={s.avatar} src={props.avatar} alt="avatar" />
		</div>
	)
}

export default Outbox;