import React from 'react'

const Home = () => {
	const news = []
	return (
		<main>
			<div className='flex w-100'>
				<div className="flex flex-col center-center">
					<h1></h1>
					<p></p>
					<button></button>
				</div>
				<div></div>
			</div>
			<div className='flex flex-col center-center'>
				<h2>Novedades</h2>
				<div className='flex'>
					{news.map((news, i) => (
						<div key={i}>
							<img
								src={news.image}
								alt=""
							/>
							<p>{news.content}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	)
}

export default Home
