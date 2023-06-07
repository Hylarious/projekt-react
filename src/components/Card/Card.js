import { useDispatch } from 'react-redux';
import styles from './Card.module.scss'
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { deleteCard } from '../../redux/cardsRedux';

const Card = props => {

	const dispatch = useDispatch()

	
	const handleFavorites = e => {
		console.log(props.cardId)
		e.preventDefault()
		dispatch(toggleCardFavorite(props.cardId));
	}

	const deleteCardHandler = () => {
		dispatch(deleteCard(props.cardId));
	}

		return (
			<div className={styles.card}> 
				<p>{props.title}</p>
				<div>
					<button onClick={handleFavorites} className={clsx(styles.cardButton, props.isFavorite && styles.active)}><i className='fa fa-star-o'></i></button>
					<button onClick={deleteCardHandler} className={styles.cardButton}><i className='fa fa-trash'></i></button>
				</div>
			  
			</div>
			
	);
};


export default Card