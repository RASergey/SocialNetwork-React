import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import style from './News.module.css';

const News = () => {
	return (
		<div>
			<div className={style.news}>
				<h2 className='title'>News</h2>
			</div>
		</div>
	)
}

export default compose(
	withAuthRedirect
)(News)