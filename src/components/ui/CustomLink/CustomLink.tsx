import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./CustomLink.module.scss";

interface CustomLinkProps {
	children: any,
	to: string,
}

const CustomLink: React.FC<CustomLinkProps> = ({children, to}) => {
	const match = useMatch(to)

	return (
		<NavLink 
			to={to}
			className={() => match ? styles.active : ""}
		>
			{children}
		</NavLink>
	)
}

export default CustomLink