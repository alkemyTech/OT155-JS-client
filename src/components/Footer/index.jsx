import React from 'react'
import { routes } from '../../utils/routeArr'
import { Link } from 'react-router-dom'
import logo from '../../LOGO-SOMOS MAS.png'
import { networks } from '../../utils/networkRoute'
import './Index.css'
const Footer = () => {
	return (
		<footer className="flex flex-col center-center pt-20 footer">
			<nav className=" nav flex justify-center border border-white border-solid relative">
				<div className="absolute logo__footer">
					<img src={logo} alt="logo somos mas" />
				</div>
				{routes.map((link, i) => (
					<Link
						className="route text-white"
						to={link.route}
						key={i}
					>
						{link.name}
					</Link>
				))}
			</nav>
			<div className="flex flex-col center-center contain__network mt-10">
				<div className="flex justify-center my-5">
					{networks.map((network, i) => (
						<div className="network rounded-full bg-white cursor-pointer">
							<a
								href={network.route}
								key={i}
							>
                                <img src={network.image} alt="" />
                            </a>
						</div>
					))}
				</div>
				<p className="Copyright">
					2022 by Alkemy. All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
