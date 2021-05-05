import style from './Outbox.module.css';

const Outbox = (props) => {

	return (
		<div className={style.message}>
			<span className={style.text}>{props.outMessage}</span>
			<img className={style.avatar} src={props.avatar} alt="avatar" />
		</div>
	)
}

export default Outbox;