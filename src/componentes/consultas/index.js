import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSquareMinus } from '@fortawesome/free-solid-svg-icons'

// import data from '../../fakeData.js'
// import Item from './itemConsultas'
import Styles from './consultas.module.css'

const Consultas = ({ data }) => {
	return (
		<div className={Styles.container}>
			<div className={Styles.result_container}>
				<div className={Styles.result}>
					<>
						<div className={Styles.table_container}>
							<table className={Styles.table}>
								<thead>
									<tr className={Styles.header}>
										<th className={Styles.title}>Order</th>
										<th className={Styles.title}>Tipo ID</th>
										<th className={Styles.title}>ID</th>
										<th className={Styles.title}>Nombres</th>
										<th className={Styles.title}>Apellidos</th>
										<th className={Styles.title}>Celular</th>
										<th className={Styles.title}>Direccion</th>
										<th className={Styles.title}>Barrio</th>
										<th className={Styles.title}></th>
									</tr>
								</thead>
								<tbody>
									{data.length !== 0 ? (
										// <Item data={data} />

										data.map((el, index) => {
											return (
												<tr key={index} className={Styles.item}>
													<td className={Styles.data}>{index + 1}</td>
													<td className={Styles.data}>{el.tipo_id}</td>
													<td className={Styles.data}>{el.id}</td>
													<td className={Styles.data}>
														{`${el.primer_nombre} ${el.segundo_nombre}`}
													</td>
													<td className={Styles.data}>
														{`${el.primer_apellido} ${el.segundo_apellido}`}
													</td>
													<td className={Styles.data}>{el.celular}</td>
													<td className={Styles.data}>{el.direccion}</td>
													<td className={Styles.data}>{el.barrio}</td>
													<td className={Styles.data}>
														<span className={Styles.btns}>
															<span
																// onClick={() => handleEditButton(el)}
																className={Styles.btn}
															>
																<FontAwesomeIcon
																	className={Styles.btn_edit}
																	icon={faPenToSquare}
																/>
															</span>
															<span
																// onClick={() => handleDeleteButton(el.codigo || el.id)}
																className={Styles.btn}
															>
																<FontAwesomeIcon
																	className={Styles.btn_delete}
																	icon={faSquareMinus}
																/>
															</span>
														</span>
													</td>
												</tr>
											)
										})
									) : (
										<tr className={Styles.item}>
											<td className={Styles.data}>
												{data.message
													? data.message
													: 'No hay datos registrados'}
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
						{/* <div className={Styles.pagination_container}>
								<span className={Styles.previous_btn}>
									<i className='fas fa-angle-left' />
								</span>
								<span className={Styles.pagination_item}>1</span>
								<span
									className={`${Styles.next_btn} ${Styles.pagination_click}`}
								>
									<i className='fas fa-angle-right' />
								</span>
							</div> */}
					</>
				</div>
			</div>
		</div>
	)
}

export default Consultas
