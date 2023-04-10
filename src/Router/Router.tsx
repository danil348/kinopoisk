import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/screens/Home/Home"
import Page404 from "../components/screens/Page404/Page404"
import Register from "../components/screens/Register/Register"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home/>} path="/"/>
				<Route element={<Register/>} path="/register"/>
				<Route element={<Page404/>} path="*"/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router