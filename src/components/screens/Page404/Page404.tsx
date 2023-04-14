import { useNavigate } from "react-router-dom";
import notFound from "../../../assets/notFound.mp4";

const Page404 = () => {
	const navigate = useNavigate()

	return (
		<div className="notFound-page">
			<div className="notFound-page__content">
				<div className="notFound-page__text">
					<h1 className="notFound-page__title">404. Страница не найдена</h1>
					<div className="notFound-page__info">Возможно, она была перемещена, или вы просто неверно указали адрес страницы</div>
					<div className="notFound-page__actions">
						<button className="notFound-page__homeButton" onClick={() => navigate("/")}>На главную</button>
					</div>
				</div>
				<div className="notFound-page__gif">
					<video src={notFound} autoPlay loop muted></video>
				</div>
			</div>
		</div>
	)
}

export default Page404