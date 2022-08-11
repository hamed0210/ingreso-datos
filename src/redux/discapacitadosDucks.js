import axios from 'axios'

// const URI = process.env.REACT_APP_URI
// const PORT = process.env.REACT_APP_PORT

const dataInicial = {
	array: [],
	message: '',
	success: false,
}

// Types
const OBTENER_DISCAPACITADOS_EXITO = 'OBTENER_DISCAPACITADOS_EXITO'
const OBTENER_DISCAPACITADOS_ERROR = 'OBTENER_DISCAPACITADOS_ERROR'
const NUEVO_DISCAPACITADO_EXITO = 'NUEVO_DISCAPACITADO_EXITO'
const NUEVO_DISCAPACITADO_ERROR = 'NUEVO_DISCAPACITADO_ERROR'
const ELIMINAR_DISCAPACITADO_EXITO = 'ELIMINAR_DISCAPACITADO_EXITO'
const ELIMINAR_DISCAPACITADO_MESSAGE_EXITO =
	'ELIMINAR_DISCAPACITADO_MESSAGE_EXITO'
const ELIMINAR_DISCAPACITADO_ERROR = 'ELIMINAR_DISCAPACITADO_ERROR'

// Reducer
export default function productosReducer(state = dataInicial, action) {
	switch (action.type) {
		case OBTENER_DISCAPACITADOS_EXITO:
			return {
				...state,
				array: action.payload.data,
			}
		case OBTENER_DISCAPACITADOS_ERROR:
			return {
				...state,
				message: action.payload.message,
			}
		case NUEVO_DISCAPACITADO_EXITO:
			return {
				...state,
				message: action.payload.message,
				success: true,
			}
		case NUEVO_DISCAPACITADO_ERROR:
			return {
				...state,
				message: action.payload.message,
				success: false,
			}
		case ELIMINAR_DISCAPACITADO_EXITO:
			return {
				...state,
				array: action.payload.array,
				message: action.payload.message,
				success: true,
			}
		case ELIMINAR_DISCAPACITADO_MESSAGE_EXITO:
			return {
				...state,
				message: action.payload.message,
				success: true,
			}
		case ELIMINAR_DISCAPACITADO_ERROR:
			return {
				...state,
				message: action.payload.message,
				success: false,
			}
		default:
			return state
	}
}

export const obtenerProductosAccion = (history) => async (dispath) => {
	// const token = getLocalStorage()
	try {
		const result = await axios.get(`${URI}${PORT}/api/productos`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		})

		/*
			Recorremos el resultado de la peticion para cambiar codigo de campo foraneo con el nombre de la categoria
		 */
		result.data.data.map((el) => {
			el['categoria'] = el['category'].nombre
			return delete el['category']
		})
		dispath({
			type: OBTENER_PRODUCTOS_EXITO,
			payload: {
				data: result.data.data,
			},
		})
	} catch (error) {
		if (error.request.status === 401) {
			// removeLocalStorage()
			const message = 'La sesion a caducado, inicia sesion nuevamente'
			dispath(cerrarSesionAccion(history, message))
		}
		if (error.message === 'Network Error') {
			dispath({
				type: OBTENER_PRODUCTOS_ERROR,
				payload: {
					message: 'Error de conexión con el servidor',
				},
			})
		} else
			dispath({
				type: OBTENER_PRODUCTOS_ERROR,
				payload: {
					message: JSON.parse(error.request.response).message,
				},
			})
		setTimeout(() => {
			dispath({
				type: OBTENER_PRODUCTOS_ERROR,
				payload: {
					message: '',
				},
			})
		}, 5000)
		console.log(error.request)
	}
}
