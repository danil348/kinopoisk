
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { BiLeftArrowAlt, BiLogInCircle } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { auth, db } from "../../../firebase"
import { useLocalStorage } from "../../../hooks/useLocalStorage"
import CustomInput from "../../ui/CustomInput/CustomInput"
import CustomLink from "../../ui/CustomLink/CustomLink"

const Login = () => {
  const userContext = useContext(AuthContext)
	const [user, setUser] = useState({email: "", password: ""})
	const navigate = useNavigate();
  const { setObject } = useLocalStorage();
	const [disable, setDisable] = useState(false)
	const [error, setError] = useState(false)
	
	const handleChange = (e: any) => {
		setError(false)
		setUser((prev: any) => ({...prev, [e.target.name]: e.target.value}))
	}
	
	const handleSend = async () => {
		try {
			setDisable(true)
			const res = await signInWithEmailAndPassword(auth, user?.email as string, user?.password as string)
			const docSnap = await getDoc(doc(db, "users", res.user.uid));
			
			const userInfo = {
				name: docSnap.data()?.name,
				email: docSnap.data()?.email,
				password: docSnap.data()?.password
			}

			userContext.setCurrentUser(userInfo)
			setObject('user', userInfo)
			navigate("/")
		} catch (error) {
			setError(true)
		} finally{
			setDisable(false)
		}
	}

	return (
		<div className="login-page">
			<div className="login-page__modal">
				{disable ? <div className="login-page__disableModal"></div> : null}
				<div className="login-page__goBack" onClick={() => navigate(-1)} >
					{disable ? <div className="login-page__goBackDisable"></div> : null}
					<BiLeftArrowAlt size={22} color="white" />
				</div>
				<div className="login-page__icon">
					<BiLogInCircle size={45} color="white"/>
				</div>
				<h1 className="login-page__title" >Войдите или зарегистрируйтесь</h1>
				<CustomInput type="email" name="email" onChange={handleChange} placeholder="email" />
				<CustomInput type="password" name="password" onChange={handleChange} placeholder="password" />
				{error ? <span className="login-page__errorMessage">Ошибка. Попробуйте снова</span> : null}
				<button onClick={handleSend} className="login-page__button">Войти</button>
				<h2 className="login-page__text" >Нет аккаунта?</h2>
				<CustomLink customClass="login-page__registerButton" to="/register">Регистрация</CustomLink>
			</div>
		</div>
	)
}

export default Login