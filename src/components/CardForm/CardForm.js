import { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import styles from './CardForm.module.scss'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { addCard } from '../../redux/cardsRedux'

const CardForm = props => {
	const dispatch = useDispatch();

	const [cardTitle, setCardTitle] = useState('')
	

	const handleCardSubmit = e => {
		e.preventDefault();
		dispatch(addCard({columnId: props.columnId, title: cardTitle}));
		setCardTitle('');
	}


	return(
		<form className={styles.cardForm} onSubmit={handleCardSubmit}>
      <TextInput  value={cardTitle} onChange={e => setCardTitle(e.target.value)}/>
      <Button>Add Card</Button>
    </form>
	
)
}

export default CardForm