import axios from "axios"
import { useEffect, useState } from "react"

const useTypes = () => {
	const [types, setTypes] = useState<any[]>([])

	useEffect(() => {
		const cancelToken = axios.CancelToken.source()
		axios.get("http://localhost:3333/types", {cancelToken: cancelToken.token})
			.then((res) => {
				setTypes(res.data)
			}).catch((error) => {
				if(axios.isCancel(error)){
					console.log("request cancelled")
				}else{

				}
			})

		return () => {
			cancelToken.cancel()
		}
	},[])

	return {types}
}
export default useTypes