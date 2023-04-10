import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { auth, db } from "../../../firebase"

const Login = () => {
  const userContext = useContext(AuthContext)
	const [user, setUser] = useState({email: "", password: ""})
	const navigate = useNavigate();
	
	const handleChange = (e: any) => {
		setUser((prev: any) => ({...prev, [e.target.name]: e.target.value}))
	}
	
	const handleSend = async () => {
		try {
			const res = await signInWithEmailAndPassword(auth, user?.email as string, user?.password as string)
			const docSnap = await getDoc(doc(db, "users", res.user.uid));

			userContext.setCurrentUser({
				name: docSnap.data()?.name,
				email: docSnap.data()?.email,
				password: docSnap.data()?.password
			})
		} catch (error) {
			console.log("🚀 ~ file: LoginModal.tsx:16 ~ onSubmit ~ error:", error)
		} finally{
			navigate("/")
		}
	}

	return (
		<div>
			<button onClick={handleSend}>click</button>
			<input type="email" name="email" onChange={handleChange} placeholder="email" />
			<input type="password" name="password" onChange={handleChange} placeholder="password" />
		</div>
	)
}

export default Login