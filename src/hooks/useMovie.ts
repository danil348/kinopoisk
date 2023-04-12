import axios from "axios";

export const useMovie = () => {
	const getMovieById = async (id: string) => {
		let movie = {}
		await axios.get(`http://localhost:3333/movies/${id}`)
			.then((res) => {
				movie = res.data
			}).catch((error) => {
				if(axios.isCancel(error)){
					console.log("request cancelled")
				}else{
					return null
				}
			})
		return movie
	}

	const getMovieByType = async (type: string, page: number) => {
		let movies = {}
		await axios.get(`http://localhost:3333/movies?types_like=${type}&_limit=10&_page=${page}`)
			.then((res) => {
				movies = res.data
			}).catch((error) => {
				if(axios.isCancel(error)){
					console.log("request cancelled")
				}else{

				}
			})
		
			return movies
	}

  return { getMovieById, getMovieByType };
};