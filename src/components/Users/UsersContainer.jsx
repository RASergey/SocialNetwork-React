import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, getUsers } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	getlistPageNumbers = () => {
		let listPageNumbers = this.props.listPageNumbers;
		let lastUsersPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		return { listPageNumbers, lastUsersPage }
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			<Preloader isFetching={this.props.isFetching} />
			<Users
				getlistPageNumbers={this.getlistPageNumbers}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				unFollow={this.props.unFollow}
				follow={this.props.follow}
				isFollowingInProgress={this.props.isFollowingInProgress}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		listPageNumbers: state.usersPage.listPageNumbers,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		isFollowingInProgress: state.usersPage.isFollowingInProgress
	}
}

export default compose(
	connect(mapStateToProps, { follow, unFollow, setCurrentPage, getUsers }),
	withAuthRedirect
)(UsersContainer)