import fetch from 'isomorphic-unfetch'

const Home = ({movies}) => {
	console.log(movies)
	
	return(
		<div className="container">
			{movies.map(movie => (
				<div>
				{movie.title}
				</div>
			))}
		</div>
	)
}
export async function getServerSideProps() {
	const{API_URL}=process.env
	
	const res = await fetch('http://localhost:1337/movies')
	const data = await res.json()
	
	return {
		props: {
			movies:data
		}
	}
}
export default Home

