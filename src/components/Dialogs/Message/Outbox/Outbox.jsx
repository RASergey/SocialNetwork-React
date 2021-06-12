import style from '../../../../styles/stylesDialogsPage/Outbox.module.scss';

const Outbox = ({ outMessage, avatar }) => {

	return (
		<div className={style.message}>
			<span className={style.text}>{outMessage}</span>
			<img className={style.avatar} src={avatar} alt='avatar' />
		</div>
	)
};

export default Outbox;