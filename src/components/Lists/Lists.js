import { useSelector } from "react-redux"
import styles from './Lists.module.scss'
import { getAllLists } from "../../redux/listsRedux"
import { Link } from "react-router-dom"

const Lists = () => {
	const lists = useSelector(state => getAllLists(state))

	return (
		<section className={styles.lists}>
			<h2 className={styles.heading}>Browse lists</h2>
			{lists.map(list => (
				<Link key={list.id} to={{pathname: `/list/${list.id}`}} className={styles.listLink}>
					<h3>{list.title}</h3>
					<p>{list.description}</p>
				</Link>
			))}
		</section>
		)
}

export default Lists