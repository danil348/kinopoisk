import React from "react"

interface CustomInputProps {
	type: string,
	name: string,
	onChange: (e: any) => void,
	placeholder: string
} 

const CustomInput: React.FC<CustomInputProps> = ({type, name, onChange, placeholder}) => {
	return (
		<input className="customInput" type={type} name={name} onChange={(e) => onChange(e)} placeholder={placeholder} />
	)
}

export default CustomInput