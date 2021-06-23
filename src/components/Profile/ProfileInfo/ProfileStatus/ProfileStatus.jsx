import style from '../../../../styles/stylesProfilePage/ProfileStatus.module.scss';
import { updateUserStatus } from '../../../../redux/profileReducer';
import { useState } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ProfileStatus = memo(({ status, authorizedUserId, currentUserId }) => {

	const [editMode, setEditMode] = useState(false);
	const [newStatus, setNewStatus] = useState('');
	const [isYuorProfile, setIsYuorProfile] = useState(false);

	const dispatch = useDispatch();

	const updateStatus = useCallback((newStatus) => {
		dispatch(updateUserStatus(newStatus));
	}, [dispatch]);

	useEffect(() => {
		setNewStatus(status);
	}, [status]);

	useEffect(() => {
		setIsYuorProfile(authorizedUserId === Number(currentUserId));
	}, [authorizedUserId, currentUserId]);

	const activateEditMode = useCallback(() => {
		setEditMode(true);
	}, [setEditMode]);

	const deActivateEditMode = useCallback(() => {
		setEditMode(false);
		updateStatus(newStatus);
	}, [setEditMode, updateStatus, newStatus]);

	const onStatusChange = useCallback((e) => {
		setNewStatus(e.currentTarget.value);
	}, [setNewStatus]);

	return (
		<div>
			{!editMode &&
				<div className={style.status + ' ' + (isYuorProfile ? style.myStatus : null)} onDoubleClick={activateEditMode}>
					{status || 'enter your status'}
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={deActivateEditMode} value={newStatus} autoFocus />
				</div>
			}
		</div>
	);
});

export default ProfileStatus;