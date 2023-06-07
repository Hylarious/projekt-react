import styles from './List.module.scss';
import Column from '../Column/Column';
import { useDispatch, useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getListById } from '../../redux/listsRedux';
import { getFilteredColumns } from '../../redux/columnRedux';
import { useParams, Navigate } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect } from 'react';
import { updateSearch } from '../../redux/searchRedux';



const List = () =>{

	const dispatch = useDispatch()

	const { listId } = useParams();
	const listData = useSelector(state => getListById(state, listId))
	const columns = useSelector(state => getFilteredColumns(state, listId));

	useEffect(() => {
		dispatch(updateSearch(''));
	}, [dispatch, listData.id]);

	if(!listData) return <Navigate to="/" />

	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>{listData.title}</h2>
			</header>
			<p className={styles.description}>{listData.description}</p>
			<SearchForm />
			<section className={styles.columns}>
				{columns.map(column =>
					<Column
						key={column.id}
						{...column}  />
				)}
			</section>
			<ColumnForm listId={listData.id}/>
		</div>
	);
};

export default List;



