import React, { useState } from 'react'
import './App.css'
import Main from './componentes/main'
import MenuTab from './componentes/menutab'
import Consultas from './componentes/consultas'
import data from 'fakeData.js'

function App() {
	const [components, setComponents] = useState('Nuevos')

	const handleClickTab = (e) => {
		setComponents(e)
	}

	const renderProps = () => {
		if (components === 'Nuevos') return <Main data={data} />
		if (components === 'Consultas') return <Consultas data={data} />
	}

	return (
		<main className='App'>
			<MenuTab handleProps={handleClickTab} />
			{renderProps()}
		</main>
	)
}

export default App
