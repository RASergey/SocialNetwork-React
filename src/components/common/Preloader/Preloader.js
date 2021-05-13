import louding from '../../../assets/images/Spin-2.1s-131px.svg';

const Preloader = (props) => {
	return (
		<div style={
			{
				display: 'inline-block',
				height: '60px',
				width: '60px',
				position: 'absolute',
				left: '55%',
				right: '45%'
			}
		}>
			{props.isFetching ? <img src={louding} style={
				{
					objectFit: 'cover',
					height: '100%',
					width: '100%'
				}
			} alt={'loading'} /> : null}
		</div>
	)

}

export default Preloader;