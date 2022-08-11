import React, { useEffect, useState } from 'react'

import Styles from './formInsert.module.css'
import InputGroup from '../inputGroup'

const FormInsert = ({ data }) => {
	const [resetForm, setResetForm] = useState(false)
	// const [showContentExist, setShowContentExist] = useState(false)
	const [datos, setDatos] = useState({})

	console.log(datos)

	useEffect(() => {
		if (resetForm) {
			document.querySelector(`.${Styles.form}`).reset()
			setResetForm(false)
		}
	}, [resetForm])

	const handleSelectChange = (e) => {
		if (!e.target.value.includes('Seleccionar')) {
			setDatos({
				[e.target.name]: e.target.value,
			})
			// setShowSelectError(false)
		}
		handleCheck()
		// else setShowSelectError(true)
	}

	const handleInputChange = (e) => {
		const tipo_id = document.querySelector('#tipo_id')
		setDatos({
			[e.target.name]: e.target.value,
			tipo_id: tipo_id.value,
		})
		handleCheck()
	}

	const handleCheck = () => {
		const tipo_id = document.querySelector('#tipo_id')
		const id = document.querySelector('#id')
		const primer_nombre = document.querySelector('#primer_nombre')
		const segundo_nombre = document.querySelector('#segundo_nombre')
		const primer_apellido = document.querySelector('#primer_apellido')
		const segundo_apellido = document.querySelector('#segundo_apellido')
		const celular = document.querySelector('#celular')
		const direccion = document.querySelector('#direccion')
		const barrio = document.querySelector('#barrio')
		data.forEach((el) => {
			if (el.id === id.value && el.tipo_id === tipo_id.value) {
				setDatos(el)
				// tipo_id.setAttribute('disabled', true)
			} else {
				primer_nombre.value = ''
				segundo_nombre.value = ''
				primer_apellido.value = ''
				segundo_apellido.value = ''
				celular.value = ''
				direccion.value = ''
				barrio.value = ''
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// const selectInput = document.querySelector(`select`)

		// selectInput && selectInput.value.includes('Seleccione')
		// ? setShowSelectError(true)
		// : dispatch(dispatchNew(datos, history, setLoading, setResetForm))
		data.push(datos)
		setResetForm(true)
		setDatos({})
	}

	return (
		<div className={Styles.container}>
			<form className={Styles.form} onSubmit={handleSubmit}>
				<div className={Styles.inputGroup}>
					<label className={Styles.label} htmlFor='tipo_id'>
						Tipo de Identificación
					</label>
					<select
						className={Styles.select}
						id='tipo_id'
						name='tipo_id'
						onChange={handleSelectChange}
						required
					>
						<option defaultValue=''>Seleccionar</option>
						<option value='CC'>Cedula de ciudadania</option>
						<option value='TI'>Tarjeta de identidad</option>
						<option value='RC'>Registro Civil</option>
						<option value='PEP'>PEP (Permiso especial de permanencia)</option>
						<option value='PPT'>PPT (Permiso de proteccion temporal)</option>
					</select>
				</div>
				<div className={Styles.inputGroup}>
					<label className={Styles.label} htmlFor='id'>
						Identificación
					</label>
					<input
						onChange={handleInputChange}
						className={Styles.input}
						type='number'
						id='id'
						name='id'
						required
					/>
				</div>
				<div className={Styles.infoGroup}>
					<span className={Styles.info}>Datos Personales</span>
					<span className={Styles.separator} />
				</div>
				<div className={Styles.inputGroupMax}>
					<InputGroup
						text='Primer Nombre'
						id='primer_nombre'
						type='text'
						margin_rigth={true}
						datosInput={{ datos, setDatos }}
						value={datos.primer_nombre}
						required={true}
					/>
					<InputGroup
						text='Segundo Nombre'
						id='segundo_nombre'
						type='text'
						datosInput={{ datos, setDatos }}
						value={datos.segundo_nombre}
						required={false}
					/>
				</div>
				<div className={Styles.inputGroupMax}>
					<InputGroup
						text='Primer Apellido'
						id='primer_apellido'
						type='text'
						margin_rigth={true}
						datosInput={{ datos, setDatos }}
						value={datos.primer_apellido}
						required={true}
					/>
					<InputGroup
						text='Segundo Apellido'
						id='segundo_apellido'
						type='text'
						datosInput={{ datos, setDatos }}
						value={datos.segundo_apellido}
						required={false}
					/>
				</div>
				<InputGroup
					text='Celular'
					id='celular'
					type='number'
					datosInput={{ datos, setDatos }}
					value={datos.celular}
					required={false}
				/>
				<div className={Styles.infoGroup}>
					<span className={Styles.info}>Datos Hogar</span>
					<span className={Styles.separator} />
				</div>
				<div className={Styles.inputGroupMax}>
					<InputGroup
						text='Dirección'
						id='direccion'
						type='text'
						margin_rigth={true}
						datosInput={{ datos, setDatos }}
						value={datos.direccion}
						required={true}
					/>
					<InputGroup
						text='Barrio'
						id='barrio'
						type='text'
						datosInput={{ datos, setDatos }}
						value={datos.barrio}
						required={false}
					/>
				</div>
				<span className={Styles.separator} />
				<div className={Styles.btn_container}>
					<button className='btn btn_success' type='submit'>
						Guardar
					</button>
				</div>
			</form>
		</div>
	)
}

export default FormInsert
