import ItemFriend from './ItemFriend/ItemFriend';
import s from './RowFriends.module.css';

const RowFriends = (props) => {
	let friends = props.friends.map(f => <ItemFriend avatar={f.avatar} name={f.name} id={f.id} />)

	return (
		<div className={s.row}>
			{friends}
		</div>
	)
}

export default RowFriends;