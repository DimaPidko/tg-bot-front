import { useEffect } from 'react'
// import { useTelegram } from './hooks/useTelegram'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import Form from './components/Form/Form'

const tg = window.Telegram.WebApp

function App() {
	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			<Header></Header>
			<Routes>
				<Route path='/products' element={<ProductList />} />
				<Route path='/' element={<Form />} />
			</Routes>
		</div>
	)
}

export default App
