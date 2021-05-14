import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {

	return (
		<div className='app-wrapper'>
			<div className='wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/profile/:userId' render={() => <ProfileContainer />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
					<Route path='/friends' render={() => <Friends />} />
				</div>
			</div>
		</div>
	)
}

export default App;
