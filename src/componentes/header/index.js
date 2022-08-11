import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { githup } from '@fortawesome/free-solid-svg-icons'
// import { githup } from '@fortawesome/free-regular-svg-icons'

import Styles from './header.module.css'

const Header = () => {
	const { pathname } = useLocation()
	const [barWidth, setbarWidth] = useState(0)
	const [barLeft, setbarLeft] = useState(0)

	useEffect(() => {
		if (pathname === '/') {
			setbarLeft(0)
			setbarWidth(0)
		}
	}, [pathname])

	const handleClick = (e) => {
		const tab = e.target
		const fatherContainer = tab.parentNode.parentNode
		const coords = tab.getBoundingClientRect()

		setbarWidth(coords.width + 10)
		setbarLeft(coords.x - fatherContainer.getBoundingClientRect().x - 5)

		if (tab.classList.contains(Styles.selected)) return

		fatherContainer.childNodes.forEach((el) => {
			if (el.localName === 'li') el.classList.remove(Styles.selected)
		})
		tab.classList.add(Styles.selected)
	}

	return (
		<header className={Styles.container}>
			<div className={Styles.header}>
				<div className={Styles.logo_container}>
					<Link className={Styles.logo} to='/'></Link>
				</div>
				<nav className={Styles.nav}>
					<ul className={Styles.menu_container}>
						<li className={Styles.menu_item}>
							<Link
								onClick={handleClick}
								className={Styles.menu_item_link}
								to={'/'}
							>
								Inicio
							</Link>
						</li>
						<li className={Styles.menu_item}>
							<Link
								onClick={handleClick}
								className={Styles.menu_item_link}
								to={'/ingresos'}
							>
								Ingresos
							</Link>
						</li>
						<li className={Styles.menu_item}>
							<Link
								onClick={handleClick}
								className={Styles.menu_item_link}
								to={'/consultas'}
							>
								Consultas
							</Link>
						</li>
					</ul>
					<span
						className={Styles.bar}
						style={{ width: barWidth, left: barLeft }}
					></span>
				</nav>
				<div className={Styles.login_link_container}>
					<Link
						onClick={handleClick}
						className={Styles.login_link}
						to={'/login'}
					>
						Login
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
