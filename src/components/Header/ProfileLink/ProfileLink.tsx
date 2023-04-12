import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { useLocalStorage } from "../../../hooks/useLocalStorage"


const ProfileLink = () => {
	const userContext = useContext(AuthContext)
	const navigate = useNavigate()
	const {removeItem} = useLocalStorage()

	const handleLogOut = () => {
		userContext.setCurrentUser({})
		removeItem("user")
	}

	const headerProfileModal = (
		<div className="header-profile__modal profile-modal">
			<Link to="/" className="profile-modal__link" onClick={handleLogOut}>выйти</Link>
		</div>
	)

	const headerProfileUser = (
		<div className="header-profile__content" onClick={() => navigate("/profile")}>
			{userContext.currentUser?.name[0]}
		</div>
	)

	return (
		<div className="header__profile header-profile">
			{userContext.currentUser ? 
				<>
					{headerProfileModal}
					{headerProfileUser}
				</>
				:
				<div className="header-profile__logIn" onClick={() => navigate("/login")} >войти</div>
			}
		</div>
	)
}

export default ProfileLink