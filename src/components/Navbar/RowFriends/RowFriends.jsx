import ItemFriend from './ItemFriend/ItemFriend';
import style from './RowFriends.module.css';

const RowFriends = (props) => {
	let friends = props.friends.map(f => <ItemFriend avatar={f.avatar} name={f.name} id={f.id} key={f.id} />)

	return (
		<div className={style.row}>
			{friends}
		</div>
	)
}

export default RowFriends;