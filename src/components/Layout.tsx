import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Header from "./Header/Header";

const Layout = () => {
  const userContext = useContext(AuthContext)
  const { getObject } = useLocalStorage();

	useEffect(() => {
		const user = getObject('user')
		user && userContext.setCurrentUser(user)
	},[])

	return (
		<>
			<Header/>
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