import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CustomLink from "./ui/CustomLink/CustomLink";

const Layout = () => {
  const userContext = useContext(AuthContext)
	const [path, setPath] = useState("")

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