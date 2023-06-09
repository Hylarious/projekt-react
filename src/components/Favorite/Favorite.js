import { useSelector } from "react-redux"
import styles from './Favorites.module.scss'
import PageTitle from "../PageTitle/PageTitle"
import Card from "../Card/Card"
import Lists from '../Lists/Lists';
import { getFavoriteCards } from "../../redux/cardsRedux"




const Favorite = () => {

const cards = useSelector(state => getFavoriteCards(state))
console.log(cards)

if(cards.length === 0) return (
<div>
	<PageTitle>Favorite</PageTitle>	
	<p className={styles.text}>Add something from your lists!</p>
	<Lists />
</div>)

return(
		<div>
			<PageTitle>Favorite</PageTitle>
			<article className={styles.column}>
			{cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} cardId={card.id}/>)}
			</article>
		</div>
	)
}

export default Favorite