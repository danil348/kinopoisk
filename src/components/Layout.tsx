import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "./Layout.module.scss";

const Layout = () => {
	const setActive = ({isActive} : any) => isActive ? styles.active : "";
  const userContext = useContext(AuthContext)
	
	return (
		<>
			<header>
				{userContext.currentUser ? 
					<>
						<NavLink to="/" className={setActive}>home</NavLink>
						<NavLink to="/profile" className={setActive}>profile</NavLink>
					</>
					:
					<>
						<NavLink to="/" className={setActive}>home</NavLink>
						<NavLink to="/login" className={setActive}>login</NavLink>
					</>
				}
			</header>
			<main>
				<Outlet/>
			</main>
			<footer>
				footer content
			</footer>
		</>
	)
}

export default Layout