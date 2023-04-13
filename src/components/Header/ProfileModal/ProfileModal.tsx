import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { useLocalStorage } from "../../../hooks/useLocalStorage"

const ProfileModal = () => {
	const userContext = useContext(AuthContext)
	const navigate = useNavigate()
	const {removeItem} = useLocalStorage()
	
	const handleLogOut = () => {
		userContext.setCurrentUser(null)
		removeItem("user")
		navigate("/")
	}

	return (
		<div className="header-profile__modal profile-modal">
			<div className="profile-modal__userInfo" onClick={() => navigate("/profile")}>
				<div className="profile-modal__name">{userContext.currentUser?.name}</div>
				<div className="profile-modal__email">{userContext.currentUser?.email}</div>
			</div>
			<Link to="/" className="profile-modal__link" onClick={handleLogOut}>выйти</Link>
		</div>
	)
}

export default ProfileModal