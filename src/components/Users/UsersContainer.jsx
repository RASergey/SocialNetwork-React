import { connect } from 'react-redux';
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
			this.props.toggleIsFetching(false);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);

		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.setUsers(data.items);
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

let usersContainer = connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);

export default usersContainer;