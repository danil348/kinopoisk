import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/screens/Home/Home"
import Page404 from "../components/screens/Page404/Page404"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home/>} path="/"/>
				<Route element={<Page404/>} path="*"/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router