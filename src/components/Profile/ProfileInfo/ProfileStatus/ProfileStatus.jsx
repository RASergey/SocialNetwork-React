import React, { useState } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';
import { useEffect } from 'react';
import style from './ProfileStatus.module.scss';

const ProfileStatus = memo(({ status, authorizedUserId, currentUserId, updateUserStatus }) => {

	const [editMode, setEditMode] = useState(false);
	const [newStatus, setNewStatus] = useState('');
	const [isYuorProfile, setIsYuorProfile] = useState(false);

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
		updateUserStatus(newStatus);
	}, [setEditMode, updateUserStatus, newStatus]);

	const onStatusChange = useCallback((e) => {
		setNewStatus(e.currentTarget.value)
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