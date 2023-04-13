import { HiSearch } from "react-icons/hi";

const HeaderSearch = () => {
	return (
		<>
			<div className="header__search header-search">
				<div className="header-search__icon">
					<HiSearch color="#fff" size={24}/>
				</div>
			</div>
		</>
	)
}

export default HeaderSearch