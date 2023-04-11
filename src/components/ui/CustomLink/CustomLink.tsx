import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./CustomLink.module.scss";

interface CustomLinkProps {
	children: any,
	to: string,
	customClass?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({children, to, customClass}) => {
	const match = useMatch(to)

	const getClass = () => {
		let newClass = match ? styles.active : ""
		return customClass ? customClass + " " + newClass : newClass
	}

	return (
		<NavLink 
			to={to}
			className={getClass}
		>
			{children}
		</NavLink>
	)
}

export default CustomLink