import { useEffect, useState } from "react";
import CustomLink from "../ui/CustomLink/CustomLink";
import ProfileLink from "./ProfileLink/ProfileLink";

const scrollConfig = {
	lastPos: 0,
	scroll: false
}

const Header = () => {
	const [scroll, setScroll] = useState(scrollConfig);
	
	const changeScroll = () =>  setScroll((prev) => ({ scroll: prev.lastPos < window.scrollY, lastPos: window.scrollY }))

	useEffect(() => {
		window.addEventListener("scroll", changeScroll)
		return () => {
			window.removeEventListener("scroll",changeScroll)
		}
	}, []);

	return (
		<header className={scroll.scroll ? "scroll header": "header"}>
			<div className="header__content">
				<div className="header__dropMenu">
					foo
				</div>
				<nav className="header__nav">
					<CustomLink to="/" customClass="header__link">Главная</CustomLink>
					<CustomLink to="/1" customClass="header__link">Магазин</CustomLink>
					<CustomLink to="/12" customClass="header__link">Моё</CustomLink>
					<CustomLink to="/112" customClass="header__link">Каналы</CustomLink>
					<CustomLink to="/132" customClass="header__link">Спорт</CustomLink>
				</nav>
				<ProfileLink/>
			</div>
		</header>
	)
}

export default Header