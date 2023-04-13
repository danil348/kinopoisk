import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Header from "./Header/Header";

const Layout = () => {
  const userContext = useContext(AuthContext)
  const { getObject } = useLocalStorage();
	const location = useLocation()

	useEffect(() => {
		const user = getObject('user')
		user && userContext.setCurrentUser(user)
	},[])

	return (
		<>
			{location.pathname == "/login" || location.pathname == "/register" ? null: <Header/>}
			<main>
				<Outlet/>
			</main>
			{/*<footer>
				footer content
			</footer>*/}
		</>
	)
}

export default Layout