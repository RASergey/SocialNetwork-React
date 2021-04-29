import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

	return (
		<div className='app-wrapper'>
			<div className='wrapper'>
				<Header />
				<Navbar state={props.state.siteBar} />
				<div className='app-wrapper-content'>
					<Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
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
