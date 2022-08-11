import React from 'react'

import Styles from './itemConsultas.module.css'

const ItemConsultas = ({ data }) => {
	const handleRender = () => {
		let dataRender = []
		let itemDataRender = []
		if (data) {
			data.map((el, index) => {
				// if (el.hasOwnProperty('fecha_creacion'))
				// 	el['fecha_creacion'] = el['fecha_creacion'].substr(0, 10)
				// if (el.hasOwnProperty('fecha_venta'))
				// 	el['fecha_venta'] = el['fecha_venta'].substr(0, 10)
				// if (el.hasOwnProperty('fecha_compra'))
				// 	el['fecha_compra'] = el['fecha_compra'].substr(0, 10)

				for (const i in el) {
					itemDataRender.push(
						<td key={i} className={Styles.data}>
							{el[i]}
						</td>
					)
				}
				/*
				  verificamos si los datos obtenidos contiene los datos del usuario registado para no pintarlos al consultar todos los usuarios regitrados ya que este tiene su propio componente (Perfil) para ver y editar sus datos
				 */

				dataRender.push(
					<tr key={index} className={Styles.item}>
						{itemDataRender}
						<td className={Styles.data}>
							<span className={Styles.btns}>
								<span
									// onClick={() => handleEditButton(el)}
									className={Styles.btn}
								>
									<i className={`${Styles.btn_edit} fas fa-edit`}></i>
								</span>
								<span
									// onClick={() => handleDeleteButton(el.codigo || el.id)}
									className={Styles.btn}
								>
									<i className={`${Styles.btn_delete} fas fa-trash-alt`}></i>
								</span>
							</span>
						</td>
					</tr>
				)

				itemDataRender = []
				return dataRender
			})
		}
		return dataRender
	}

	return handleRender()
}

export default ItemConsultas
