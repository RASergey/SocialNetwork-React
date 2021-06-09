import React, { useState } from 'react';
import style from './ProfileStatus.module.css';

const ProfileStatus = (props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		if (props.authorizedUserId === Number(props.currentUserId)) {
			setEditMode(true)
		}
	}

	const deActivateEditMode = (e) => {
		setEditMode(false)
		props.updateUserStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode &&
				<div className={style.status} onDoubleClick={activateEditMode}>
					{props.status || 'enter your status'}
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={deActivateEditMode} value={status} autoFocus />
				</div>
			}
		</div>
	)

};

export default ProfileStatus;