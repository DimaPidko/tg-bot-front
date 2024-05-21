// import OpenAI from 'openai'
import { useEffect } from 'react'
import './App.css'

const tg = window.Telegram.WebApp
// const openai = new OpenAI({
// 	apiKey: 'sk-proj-SfG2qEWz36GZhSSinZz4T3BlbkFJwr2x6rO1QetoDWPO2e93',
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
