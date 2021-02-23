import fetch from 'isomorphic-unfetch'

const Home = ({images}) => {
	console.log(images)
	
	return(
		<div className="container">
			{images.map(image => (
				<div>
				{image.nom}
				</div>
			))}
		</div>
	)
}
export async function getServerSideProps() {
	const{API_URL}=process.env
	
	const res = await fetch('https://pomona-passion-froid.herokuapp.com/images')
	const data = await res.json()
	
	return {
		props: {
			images:data
		}
	}
}
export default Home

