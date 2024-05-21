// import OpenAI from 'openai'
import { useEffect } from 'react'
import './App.css'

const tg = window.Telegram.WebApp
// const openai = new OpenAI({
// 	apiKey: '',
// 	dangerouslyAllowBrowser: true,
// })

function App() {
	useEffect(() => {
		tg.ready()
	}, [])

	const onClose = () => {
		tg.close()
	}

	return (
		<div className='App'>
			work
			<button onClick={onClose}>Закрыть</button>
		</div>
	)
}

export default App
