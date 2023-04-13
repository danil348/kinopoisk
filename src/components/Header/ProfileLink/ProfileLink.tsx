import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import ProfileModal from "../ProfileModal/ProfileModal"

const ProfileLink = () => {
	const userContext = useContext(AuthContext)
	const navigate = useNavigate()

	return (
		<div className="header__profile header-profile">
			{userContext.currentUser ? 
				<>
					<ProfileModal/>
					<div className="header-profile__content" onClick={() => navigate("/profile")}>
						{userContext.currentUser?.name[0]}
					</div>
				</>
				:
				<div className="header-profile__logIn" onClick={() => navigate("/login")}>войти</div>
			}
		</div>
	)
}

export default ProfileLink