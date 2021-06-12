import style from '../../../styles/stylesNavbar/RowFriends.module.scss';
import ItemFriend from './ItemFriend/ItemFriend';
import { useSelector } from 'react-redux';
import { getFriends } from '../../../redux/friends-selectors';
import { memo } from 'react';

const RowFriends = memo(() => {

	const friends = useSelector(getFriends);

	return (
		<div className={style.row}>
			{friends.map(f => <ItemFriend avatar={f.avatar} name={f.name} id={f.id} key={f.id} />)}
		</div>
	);
});

export default RowFriends;