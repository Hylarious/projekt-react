import { useDispatch } from 'react-redux';
import styles from './Card.module.scss'
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

	const dispatch = useDispatch()

	const handleFavorites = e => {
		e.preventDefault()
		dispatch(toggleCardFavorite(props.cardId));
	}

		return (
			<div className={styles.card}> 
				<p>{props.title}</p>
			  <button onClick={handleFavorites} className={clsx(styles.cardButton, props.isFavorite && styles.active)}><i className='fa fa-star-o'></i></button>
			</div>
			
	);
};


export default Card