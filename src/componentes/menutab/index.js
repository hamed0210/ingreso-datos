import React, { useEffect } from 'react'

import Styles from './menutab.module.css'

const MenuTab = ({ handleProps }) => {
	// const [barWidth, setbarWidth] = useState(0)
	// const [barLeft, setbarLeft] = useState(0)

	useEffect(() => {
		// const bar = document.querySelector(`.${Styles.bar}`)
		// const menu = document.querySelector(`.${Styles.menu}`)
		const menu = document.querySelector(`[class="${Styles.menu}"]`)
		const firstItem = menu.firstChild
		// bar.style.width = `${firstItem.getBoundingClientRect().width + 10}px`
		// setbarLeft(
		// 	menu.parentNode.parentNode.getBoundingClientRect().x +
		// 		firstItem.getBoundingClientRect().x -
		// 		5
		// )
		firstItem.classList.add(Styles.selected)
	}, [])

	const handleClick = (e) => {
		const tab = e.target
		const menu = tab.parentNode

		handleProps(tab.innerHTML)

		// const header = tab.parentNode.parentNode.parentNode
		// const tab_coords = tab.getBoundingClientRect()
		// const header_coords = header.getBoundingClientRect()
		// setbarWidth(tab_coords.width + 10)
		// setbarLeft(header_coords.x + tab_coords.x - 5)
		if (tab.classList.contains(Styles.selected)) return
		menu.childNodes.forEach((el) => {
			if (el.localName === 'li') el.classList.remove(Styles.selected)
		})
		tab.classList.add(Styles.selected)
	}

	return (
		<header className={Styles.container}>
			<nav className={Styles.menu_container}>
				<ul className={Styles.menu}>
					<li className={Styles.item} onClick={handleClick}>
						Nuevos
					</li>
					<li className={Styles.item} onClick={handleClick}>
						Consultas
					</li>
				</ul>
				{/* <span
					className={Styles.bar}
					style={{ width: barWidth, left: barLeft }}
				/> */}
			</nav>
		</header>
	)
}

export default MenuTab
