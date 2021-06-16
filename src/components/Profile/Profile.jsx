import style from '../../styles/stylesProfilePage/Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useCallback, useLayoutEffect } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserId } from '../../redux/autch-selectors';
import { getUserProfile, getUserStatus } from '../../redux/profileReducer';

const Profile = () => {

	const [currentUserId, setCurrentUserId] = useState(0);
	const [autorizedUserId, setAutorizedUserId] = useState(0);

	const match = useRouteMatch();
	const userId = useSelector(getUserId);

	const dispatch = useDispatch()


	useEffect(() => {
		setCurrentUserId(match.params.userId);
		setAutorizedUserId(userId);
	}, [match.params.userId, userId]);

	useLayoutEffect(() => {
		if (!currentUserId) {
			setCurrentUserId(autorizedUserId);
		}
	}, [currentUserId, autorizedUserId]);

	const userProfile = useCallback((currentUserId) => {
		dispatch(getUserProfile(currentUserId));
	}, [dispatch]);

	const userStatus = useCallback((currentUserId) => {
		dispatch(getUserStatus(currentUserId))
	}, [dispatch]);

	useLayoutEffect(() => {
		if (currentUserId) {
			userProfile(currentUserId)
		}
	}, [userProfile, currentUserId]);

	useLayoutEffect(() => {
		if (currentUserId) {
			userStatus(currentUserId)
		}
	}, [userStatus, currentUserId]);

	return (
		<div className={style.profile}>
			<ProfileInfo currentUserId={currentUserId || autorizedUserId} />
			<MyPosts />
		</div>
	);
};

export default withAuthRedirect(Profile);