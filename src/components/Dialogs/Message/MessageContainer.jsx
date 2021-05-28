import { connect } from 'react-redux';
import { sendMessage } from '../../../redux/dialogsReducer';
import Message from './Message';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
	}
}

export default connect(mapStateToProps, { sendMessage })(Message);
