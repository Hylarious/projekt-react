import { useSelector } from "react-redux"
import styles from './Favourites.module.scss'
import PageTitle from "../PageTitle/PageTitle"
import Card from "../Card/Card"
import { getFavoriteCards } from "../../redux/store"
import { Navigate } from "react-router-dom"



const Favorite = () => {

const cards = useSelector(state => getFavoriteCards(state))
console.log(cards)

if(cards.length === 0) return <Navigate to="/" />

	
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