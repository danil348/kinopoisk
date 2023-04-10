import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import CustomLink from "./ui/CustomLink/CustomLink";

const Layout = () => {
  const userContext = useContext(AuthContext)
	const [path, setPath] = useState("")
  const { getItem } = useLocalStorage();

	useEffect(() => {
		const password = getItem("password")
		const mail = getItem("email")
		const name = getItem("name")

		if(name && mail && password){
			userContext.setCurrentUser({
				name: name,
				email: mail,
				password: password
			})
		}
	},[])

	useEffect(() => {
		setPath(userContext.currentUser ? "profile" : "login")
	},[userContext.currentUser])

	return (
		<>
			<header>
				<CustomLink to="/">home</CustomLink>
				<CustomLink to={"/" + path}>{path}</CustomLink>
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