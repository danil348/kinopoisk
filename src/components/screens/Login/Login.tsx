
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useContext, useState } from "react"
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
	
	const handleChange = (e: any) => {
		setUser((prev: any) => ({...prev, [e.target.name]: e.target.value}))
	}
	
	const handleSend = async () => {
		try {
			const res = await signInWithEmailAndPassword(auth, user?.email as string, user?.password as string)
			const docSnap = await getDoc(doc(db, "users", res.user.uid));
			
			const userInfo = {
				name: docSnap.data()?.name,
				email: docSnap.data()?.email,
				password: docSnap.data()?.password
			}

			userContext.setCurrentUser(userInfo)
			setObject('user', userInfo)
		
		} catch (error) {
			console.log("🚀 ~ file: LoginModal.tsx:16 ~ onSubmit ~ error:", error)
		} finally{
			navigate("/")
		}
	}

	return (
		<div>
			<button onClick={handleSend}>click</button>
			<CustomInput type="email" name="email" onChange={handleChange} placeholder="email" />
			<CustomInput type="password" name="password" onChange={handleChange} placeholder="password" />
			<CustomLink to="/register">register</CustomLink>
		</div>
	)
}

export default Login