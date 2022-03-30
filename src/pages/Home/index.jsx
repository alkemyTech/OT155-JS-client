import React from 'react'
import './index.css'

const Home = () => {
	const news = []
	return (
		<main>
			<div className="flex justify-center flex-col lg:flex-row sm:flex-col">
				<div className="flex flex-col center-center info__main width__mean">
					<h1 className="title">Somos Más</h1>
					<p className="text">
						Desde 1997 en Somos Más
						trabajamos con los chicos y
						chicas, mamás y papás, abuelos y
						vecinos del barrio La Cava
						generando procesos de
						crecimiento y de inserción
						social. Uniendo las manos de
						todas las familias, las que
						viven en el barrio y las que
						viven fuera de él, es que
						podemos pensar, crear y
						garantizar estos procesos. Somos
						una asociación civil sin fines
						de lucro que se creó en 1997 con
						la intención de dar alimento a
						las familias del barrio. Con el
						tiempo fuimos involucrándonos
						con la comunidad y agrandando y
						mejorando nuestra capacidad de
						trabajo. Hoy somos un centro
						comunitario que acompaña a más
						de 700 personas a través de las
						áreas de: Educación, deportes,
						primera infancia, salud,
						alimentación y trabajo social.
					</p>
					<div className="flex justify-center mt-5">
						<button className='contact'>Contact Us</button>
					</div>
				</div>
				<div className='slider width__mean'></div>
			</div>
			<div className="flex flex-col center-center my-20">
				<h2 className='subtitle'>Ultimas Novedades</h2>
				<div className="flex justify-center flex-col lg:flex-row sm:flex-col sm:items-center">
					{news.map((news, i) => (
						<div key={i} className='item__news flex items-end'>
							{/* <img
								src={news.image}
								alt=""
							/> */}
							<p>{news.content}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	)
}

export default Home
