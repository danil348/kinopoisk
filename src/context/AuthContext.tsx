import { createContext, useState } from "react"
import { userType } from "../types/user.interface"

export type UserContextType = {
	currentUser: any
	setCurrentUser: any 
}

type ChildrenUserContextType = {
	children: React.ReactNode
}

export const AuthContext = createContext({} as UserContextType)

export const AuthContextProvider = ({children} : ChildrenUserContextType) => {
  const [currentUser, setCurrentUser] = useState<userType | null>(null);

	return (
		<AuthContext.Provider value={{currentUser, setCurrentUser}} >
			{children}
		</AuthContext.Provider>
	)
}
