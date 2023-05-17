import { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import styles from './CardForm.module.scss'
import Button from '../Button/Button'

const CardForm = props => {
	const [cardTitle, setCardTitle] = useState('')

	const handleCardSubmit = e => {
		e.preventDefault();
		props.action({title: cardTitle})
		setCardTitle('')
	}


	return(
		<form className={styles.cardForm} onSubmit={handleCardSubmit}>
      <TextInput  value={cardTitle} onChange={e => setCardTitle(e.target.value)}/>
      <Button>Add Card</Button>
    </form>
	
)
}

export default CardForm