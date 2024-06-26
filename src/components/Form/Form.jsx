import React, { useCallback, useEffect, useState } from 'react'
// import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

const Form = () => {
	const [country, setCountry] = useState('')
	const [city, setCity] = useState('')
	const [subject, setSubject] = useState('physical')
	const tg = window.Telegram.WebApp
	// const { tg } = useTelegram()

	const onSendData = useCallback(() => {
		const data = {
			country,
			city,
			subject,
		}
		tg.sendData(JSON.stringify(data))
		// eslint-disable-next-line
	}, [country, city, subject])

	useEffect(() => {
		tg.WebApp.onEvent('mainButtonClicked', onSendData)
		return () => {
			tg.WebApp.offEvent('mainButtonClicked', onSendData)
		}
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Отправить данные',
		})
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (!country || !city) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
		// eslint-disable-next-line
	}, [])

	const onChangeCountry = e => {
		setCountry(e.target.value)
	}
	const onChangeCity = e => {
		setCity(e.target.value)
	}
	const onChangeSubject = e => {
		setSubject(e.target.value)
	}

	return (
		<div className={'form'}>
			<h3>Введите ваши данные</h3>
			<input
				className={'input'}
				type='text'
				placeholder={'Страна'}
				value={country}
				onChange={onChangeCountry}
			/>
			<input
				className={'input'}
				type='text'
				placeholder={'Город'}
				value={city}
				onChange={onChangeCity}
			/>
			<select className={'select'} value={subject} onChange={onChangeSubject}>
				<option value={'physical'}>Физ. лицо</option>
				<option value={'legal'}>Юр. лицо</option>
			</select>
		</div>
	)
}

export default Form
