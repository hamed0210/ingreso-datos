import React from 'react'

import Styles from './inputGroup.module.css'

const InputGroup = ({
	text,
	id,
	type,
	margin_rigth = false,
	datosInput,
	value = '',
	required,
}) => {
	// console.log(margin_rigth)

	const handleInputChange = (e) => {
		datosInput.setDatos({
			...datosInput.datos,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div
			className={
				margin_rigth
					? `${Styles.container} ${Styles.margin_rigth}`
					: Styles.container
			}
		>
			<label className={Styles.label} htmlFor={id}>
				{text}
			</label>
			<input
				onChange={handleInputChange}
				className={
					id === 'direccion'
						? `${Styles.input} ${Styles.width_max}`
						: Styles.input
				}
				type={type}
				id={id}
				name={id}
				value={value}
				required={required}
			/>
		</div>
	)
}

export default InputGroup
