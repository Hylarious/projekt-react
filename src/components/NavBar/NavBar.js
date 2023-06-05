import Container from '../Container/Container'
import styles from './NavBar.module.scss'

const NavBar = () =>{
	return (
		<nav className={styles.navBar}>
			<Container>
				<div className={styles.navBarContainer}>
					<a href="/"><i class="fa fa-bars"></i></a>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/favorite">Favorite</a></li>
						<li><a href="/about">About</a></li>
					</ul>
				</div>
			</Container>	
			
		</nav>
	)
}

export default NavBar
