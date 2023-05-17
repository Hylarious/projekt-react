import styles from './Column.module.scss'
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useState } from 'react';
import shortid from 'shortid';

const Column = props => {

  const [cards, setCards ] = useState(props.cards)
  const addCard = newCard => {
		setCards([...cards, {id: shortid(), title: newCard.title}])
	}
 return (
	<article className={styles.column}>
    <h2 className={styles.title}><span className={styles.icon + ' fa fa-'+ props.icon}></span>{props.title}</h2>
    <ul className={styles.cards}>
    {cards.map(card => <Card key={card.id} title={card.title} />)}
    </ul>
    <CardForm action={addCard}/>
  </article>
 );
};

export default Column