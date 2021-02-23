import styled from '@emotion/styled'

function Card ({movie}){
	const{API_URL}=process.env	
	return(
		<CardStyled>
			<div className="poster">
				<img src={API_URL + movie.cover.url} alt=""/>
			</div>
		</CardStyled>
	)
}

const CardStyled = styled.div


export default Card