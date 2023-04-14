import { useEffect, useState } from "react";
import CustomLink from "../ui/CustomLink/CustomLink";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
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
					<CustomLink to="/404/1" customClass="header__link">Магазин</CustomLink>
					<CustomLink to="/404/2" customClass="header__link">Моё</CustomLink>
					<CustomLink to="/404/3" customClass="header__link">Каналы</CustomLink>
					<CustomLink to="/404/4" customClass="header__link">Спорт</CustomLink>
					<HeaderSearch/>
				</nav>
				<ProfileLink/>
			</div>
		</header>
	)
}

export default Header