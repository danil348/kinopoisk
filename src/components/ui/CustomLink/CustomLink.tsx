import React from "react";
import { NavLink } from "react-router-dom";

interface CustomLinkProps {
	children: any,
	to: string,
	customClass?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({children, to, customClass}) => {

	return (
		<NavLink 
			to={to}
			className={customClass}
		>
			{children}
		</NavLink>
	)
}

export default CustomLink