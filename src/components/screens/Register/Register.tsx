import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { BiLeftArrowAlt, BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { auth, db } from "../../../firebase";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { userType } from "../../../types/user.interface";
import CustomInput from "../../ui/CustomInput/CustomInput";
import CustomLink from "../../ui/CustomLink/CustomLink";

const Register = () => {
  const userContext = useContext(AuthContext)
  const { setObject } = useLocalStorage();
	const navigate = useNavigate();
	const [user, setUser] = useState<userType | null>()
	const [disable, setDisable] = useState(false)
	const [error, setError] = useState(false)
	
	const handleChange = (e: any) => setUser((prev: any) => ({...prev, [e.target.name]: e.target.value}))

	const handleSend = async () => {
		try {
			setDisable(true)
			const res = await createUserWithEmailAndPassword(auth, user?.email as string, user?.password as string)
			await setDoc(doc(db, "users", res.user.uid), {...user});
			
			userContext.setCurrentUser({...user})
			setObject('user', user)
			navigate("/")
		} catch (error) {
			setError(true)
		} finally{
			setDisable(false)
		}
	}

	return (
		<div className="register-page">
			<div className="register-page__modal">
				{disable ? <div className="register-page__disableModal"></div> : null}
				<div className="register-page__goBack" onClick={() => navigate(-1)} >
					{disable ? <div className="register-page__goBackDisable"></div> : null}
					<BiLeftArrowAlt size={22} color="white" />
				</div>
				<div className="register-page__icon">
					<BiUserPlus size={45} color="white"/>
				</div>
				<h1 className="register-page__title" >Войдите или зарегистрируйтесь</h1>
				<CustomInput type="text" name="name" onChange={handleChange} placeholder="name" />
				<CustomInput type="email" name="email" onChange={handleChange} placeholder="email" />
				<CustomInput type="password" name="password" onChange={handleChange} placeholder="password" />
				{error ? <span className="register-page__errorMessage">Ошибка. Попробуйте снова</span> : null}
				<button onClick={handleSend} className="register-page__button" >Регистрация</button>
				<h2 className="register-page__text" >Уже есть аккаунт?</h2>
				<CustomLink customClass="register-page__loginButton" to="/login">Войти</CustomLink>
			</div>
		</div>
	)
}

export default Register