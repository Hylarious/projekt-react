import Container from '../Container/Container'
import styles from './NavBar.module.scss'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () =>{
	return (
		<nav className={styles.navBar}>
			<Container>
				<div className={styles.navBarContainer}>
					<Link to="/"><i class="fa fa-bars"></i></Link>
					<ul>
					<li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
					to="/">Home</NavLink></li>
						<li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
						<li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
					</ul>
				</div>
			</Container>	
			
		</nav>
	)
}

export default NavBar
