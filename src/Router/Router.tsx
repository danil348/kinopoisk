import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../components/screens/Home/Home"
import Login from "../components/screens/Login/Login"
import MoviePage from "../components/screens/MoviePage/MoviePage"
import Page404 from "../components/screens/Page404/Page404"
import Profile from "../components/screens/Profile/Profile"
import Register from "../components/screens/Register/Register"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout/>} path="/" >
					<Route element={<Home/>} index/>
					<Route element={<MoviePage/>} path="/movie/:category/:id"/>
					<Route element={<Register/>} path="/register"/>
					<Route element={<Login/>} path="/login"/>
					<Route element={<Profile/>} path="/profile"/>
					<Route element={<Page404/>} path="*"/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router