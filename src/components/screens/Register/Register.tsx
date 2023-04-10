import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { auth, db } from "../../../firebase";
import { userType } from "../../../types/user.interface";

const Register = () => {
  const userContext = useContext(AuthContext)
	const [user, setUser] = useState<userType | null>()
	const navigate = useNavigate();
	
	const handleChange = (e: any) => {
		setUser((prev: any) => ({...prev, [e.target.name]: e.target.value}))
	}

	const handleSend = async () => {
		try {
			const res = await createUserWithEmailAndPassword(auth, user?.email as string, user?.password as string)
			await setDoc(doc(db, "users", res.user.uid), {...user});
			userContext.setCurrentUser({...user})

			navigate("/")
		} catch (error) {
			console.log("🚀 ~ file: LoginModal.tsx:16 ~ onSubmit ~ error:", error)
		} finally{
			console.log("created")
		}
	}

	return (
		<div>
			<button onClick={handleSend}>click</button>
			<input type="text" name="name" onChange={handleChange} placeholder="name" />
			<input type="email" name="email" onChange={handleChange} placeholder="email" />
			<input type="password" name="password" onChange={handleChange} placeholder="password" />
		</div>
	)
}

export default Register