import React from 'react'
import Styles from './busqueda.module.css'

const Busqueda = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.form_container}>
				<div className={Styles.input_group}>
					<label className={Styles.label} htmlFor='id'>
						No. Identificación
					</label>
					<input
						className={Styles.input}
						id='id'
						type='number'
						placeholder='Escribir número de identificación'
						autoFocus
					/>
				</div>
			</div>
			<div className={Styles.resultado_container}>
				<h3 className={Styles.resultado_nombres}>Hamed Duran Mendoza</h3>
				<p className={Styles.resultado_id}>1046814387</p>
				<p className={Styles.resultado_lider}>Lider: Clara Algarin</p>
				<div className={Styles.resultado_mesa_container}>
					<h3 className={Styles.resultado_mesa}>Mesa</h3>
					<h1 className={Styles.resultado_mesa_numero}>21</h1>
					<h3 className={Styles.resultado_lugar}>Maria Emma</h3>
				</div>
			</div>
		</div>
	)
}

export default Busqueda
