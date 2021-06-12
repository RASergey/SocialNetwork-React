import style from '../../styles/stylesNewsPage/News.module.scss';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const News = () => {

	return (
		<div>
			<div className={style.news}>
				<h2 className='title'>News</h2>
			</div>
		</div>
	);
};

export default withAuthRedirect(News);