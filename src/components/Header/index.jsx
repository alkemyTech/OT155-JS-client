import React from 'react'
import logo from '../../LOGO-SOMOS MAS.png'
import { Link } from 'react-router-dom'
import { routes } from '../../utils/routeArr'
import './index.css'

const header = () => {
	return (
		<header
			className="flex justify-between items-center px-10 w-100 py-10"
			id='header'
		>
			{/* Logo */}
			<div>
				<img
					src={logo}
					alt="logo somos mas"
					className="logo"
				/>
			</div>
			{/* Navbar */}
			<div className="flex items-center">
				<nav className="px-10">
					{routes.map((link, i) => (
						<Link className='route' to={'/' + link.route}>
							{link.name}
						</Link>
					))}
				</nav>
				<div className="">
					<Link to="login" className="mr-2 login">
						Login
					</Link>
					<Link to="registro" className="ml-2 register">
						Registrate
					</Link>
				</div>
			</div>
		</header>
	)
}

export default header
