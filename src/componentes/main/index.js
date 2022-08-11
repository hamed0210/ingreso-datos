import React from 'react'

import Styles from './main.module.css'
import FormInsert from '../formInsert'

const Main = ({ data }) => {
	return (
		<section className={Styles.container}>
			<FormInsert data={data} />
		</section>
	)
}

export default Main
