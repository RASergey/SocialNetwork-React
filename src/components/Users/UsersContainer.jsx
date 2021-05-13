import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.toggleIsFetching(false);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.toggleIsFetching(false);
			});
	}

	render() {
		return <>
			<Preloader isFetching={this.props.isFetching} />
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				unFollow={this.props.unFollow}
				follow={this.props.follow}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching));
		}
	}
}


let usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default usersContainer;