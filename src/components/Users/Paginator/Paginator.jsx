import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getTotalUsersCount } from '../../../redux/users-selectors';
import style from './Paginator.module.css';

const Paginator = memo(({ pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

	const totalItemsCount = useSelector(getTotalUsersCount);

	const [pagesCount, setPagesCount] = useState(0);
	const [listPages, setListPages] = useState([]);
	const [portionCount, setPortionCount] = useState(0);
	const [portionNumber, setPortionNumber] = useState(1);
	const [leftPortionPageNumber, setLeftPortionPageNumber] = useState(0);
	const [rightPortionPageNumber, setRightPortionPageNumber] = useState(0);

	useEffect(() => {
		setPagesCount(Math.ceil(totalItemsCount / pageSize));
	}, [totalItemsCount, pageSize]);

	const creatListPages = useMemo(() => {
		return new Array(pagesCount).fill('').map((_, i) => `${i + 1}`);
	}, [pagesCount]);

	useLayoutEffect(() => {
		setListPages(creatListPages);
	}, [creatListPages]);

	useEffect(() => {
		setPortionCount(Math.ceil(pagesCount / portionSize));
	}, [pagesCount, portionSize]);

	useEffect(() => {
		setLeftPortionPageNumber((portionNumber - 1) * portionSize + 1);
	}, [portionNumber, portionSize]);

	useEffect(() => {
		setRightPortionPageNumber(portionNumber * portionSize);
	}, [portionNumber, portionSize]);

	const clickPageNumber = useCallback((currentPageNumber) => {
		onPageChanged(currentPageNumber);
	}, [onPageChanged]);

	const clickPageFirst = useCallback((firstPage) => {
		setPortionNumber(firstPage);
		clickPageNumber(firstPage);
	}, [clickPageNumber]);

	const clickPageLast = useCallback((LastPage) => {
		setPortionNumber(portionCount);
		clickPageNumber(LastPage);
	}, [clickPageNumber, portionCount]);

	return (
		<div className={style.paginator}>
			<button
				className={portionNumber > 1 ? null : style.noActiv}
				onClick={() => { clickPageFirst(1) }} >{'First'}</button>
			<button
				className={portionNumber > 1 ? null : style.noActiv}
				onClick={() => { setPortionNumber(portionNumber - 1) }} >{'<<'}</button>
			<ul className={style.rowPage}>
				{
					listPages
						.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
						.map(p => (
							<li className={currentPage === p ? style.selectedPage : null}
								onClick={() => { clickPageNumber(p) }} key={p}>{p}</li>
						))
				}
			</ul>
			<button
				className={portionCount <= portionNumber ? style.noActiv : null}
				onClick={() => { setPortionNumber(portionNumber + 1) }} >{'>>'}</button>
			<button
				className={portionCount <= portionNumber ? style.noActiv : null}
				onClick={() => { clickPageLast(listPages.length) }} >{'Last'}</button>
		</div>
	)

});

export default Paginator;